---
title: Port Requirements
description: Read about port requirements needed in order for Rancher to operate properly, both for Rancher nodes and downstream Kubernetes cluster nodes
---

import PortsIaasNodes from '@site/src/components/PortsIaasNodes'
import PortsCustomNodes from '@site/src/components/PortsCustomNodes'
import PortsImportedHosted from '@site/src/components/PortsImportedHosted'

To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes.

## Rancher Nodes

The following table lists the ports that need to be open to and from nodes that are running the Rancher server.

The port requirements differ based on the Rancher server architecture.

Rancher can be installed on any Kubernetes cluster. For Rancher installs on a K3s, RKE, or RKE2 Kubernetes cluster, refer to the tabs below. For other Kubernetes distributions, refer to the distribution's documentation for the port requirements for cluster nodes.

:::note Notes:

- Rancher nodes may also require additional outbound access for any external authentication provider which is configured (LDAP for example).
- Kubernetes recommends TCP 30000-32767 for node port services.
- For firewalls, traffic may need to be enabled within the cluster and pod CIDR.
- Rancher nodes may also need outbound access to an external S3 location which is used for storing cluster backups (Minio for example).

:::

### Ports for Rancher Server Nodes on K3s

<details>
  <summary>Click to expand</summary>

The K3s server needs port 6443 to be accessible by the nodes.

The nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used. The node should not listen on any other port. K3s uses reverse tunneling such that the nodes make outbound connections to the server and all kubelet traffic runs through that tunnel. However, if you do not use Flannel and provide your own custom CNI, then port 8472 is not needed by K3s.

If you wish to utilize the metrics server, you will need to open port 10250 on each node.

:::note Important:

The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472.

:::

The following tables break down the port requirements for inbound and outbound traffic:

<figcaption>Inbound Rules for Rancher Server Nodes</figcaption>

| Protocol | Port | Source | Description
|-----|-----|----------------|---|
| TCP      | 80   | Load balancer/proxy that does external SSL termination                                                                                                                                | Rancher UI/API when external SSL termination is used |
| TCP      | 443  | <ul><li>server nodes</li><li>agent nodes</li><li>hosted/registered Kubernetes</li><li>any source that needs to be able to use the Rancher UI or API</li></ul> | Rancher agent, Rancher UI/API, kubectl               |
| TCP | 6443 | K3s server nodes | Kubernetes API
| UDP | 8472 | K3s server and agent nodes | Required only for Flannel VXLAN.
| TCP | 10250 | K3s server and agent nodes | kubelet

<figcaption>Outbound Rules for Rancher Nodes</figcaption>

| Protocol | Port | Destination                                              | Description                                   |
| -------- | ---- | -------------------------------------------------------- | --------------------------------------------- |
| TCP      | 22   | Any node IP from a node created using Node Driver        | SSH provisioning of nodes using Node Driver   |
| TCP      | 443  | git.rancher.io |  Rancher catalog                     |
| TCP      | 2376 | Any node IP from a node created using Node driver        | Docker daemon TLS port used by Docker Machine |
| TCP      | 6443 | Hosted/Imported Kubernetes API                           | Kubernetes API server                         |

</details>

### Ports for Rancher Server Nodes on RKE

<details>
  <summary>Click to expand</summary>

Typically Rancher is installed on three RKE nodes that all have the etcd, control plane and worker roles.

The following tables break down the port requirements for traffic between the Rancher nodes:

<figcaption>Rules for traffic between Rancher nodes</figcaption>

| Protocol | Port | Description |
|-----|-----|----------------|
| TCP | 443 | Rancher agents |
| TCP | 2379 | etcd client requests |
| TCP | 2380 | etcd peer communication |
| TCP | 6443 | Kubernetes apiserver |
| TCP | 8443 | Nginx Ingress's Validating Webhook |
| UDP | 8472 | Canal/Flannel VXLAN overlay networking |
| TCP | 9099 | Canal/Flannel livenessProbe/readinessProbe |
| TCP | 10250 | Metrics server communication with all nodes |
| TCP | 10254 | Ingress controller livenessProbe/readinessProbe |

The following tables break down the port requirements for inbound and outbound traffic:

<figcaption>Inbound Rules for Rancher Nodes</figcaption>

| Protocol | Port | Source | Description |
|-----|-----|----------------|---|
| TCP | 22 | RKE CLI | SSH provisioning of node by RKE |
| TCP | 80 | Load Balancer/Reverse Proxy | HTTP traffic to Rancher UI/API |
| TCP | 443 | <ul><li>Load Balancer/Reverse Proxy</li><li>IPs of all cluster nodes and other API/UI clients</li></ul> | HTTPS traffic to Rancher UI/API |
| TCP | 6443 | Kubernetes API clients | HTTPS traffic to Kubernetes API |

<figcaption>Outbound Rules for Rancher Nodes</figcaption>

| Protocol | Port | Destination | Description |
|-----|-----|----------------|---|
| TCP | 443 | git.rancher.io | Rancher catalog |
| TCP | 22 | Any node created using a node driver | SSH provisioning of node by node driver |
| TCP | 2376 | Any node created using a node driver | Docker daemon TLS port used by node driver |
| TCP | 6443 | Hosted/Imported Kubernetes API                           | Kubernetes API server                         |
| TCP | Provider dependent | Port of the Kubernetes API endpoint in hosted cluster | Kubernetes API |

</details>

### Ports for Rancher Server Nodes on RKE2

<details>
  <summary>Click to expand</summary>

The RKE2 server needs port 6443 and 9345 to be accessible by other nodes in the cluster.

All nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used.

If you wish to utilize the metrics server, you will need to open port 10250 on each node.

:::note Important:

The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472.

:::

<figcaption>Inbound Rules for RKE2 Server Nodes</figcaption>

| Protocol | Port | Source | Description
|-----|-----|----------------|---|
| TCP | 9345 | RKE2 server and agent nodes | Node registration. Port should be open on all server nodes to all other nodes in the cluster.
| TCP | 6443 | RKE2 agent nodes | Kubernetes API
| UDP | 8472 | RKE2 server and agent nodes | Required only for Flannel VXLAN
| TCP | 10250 | RKE2 server and agent nodes | kubelet
| TCP | 2379 | RKE2 server nodes | etcd client port
| TCP | 2380 | RKE2 server nodes | etcd peer port
| TCP | 30000-32767 | RKE2 server and agent nodes | NodePort port range. Can use TCP or UDP.
| TCP | 5473 | Calico-node pod connecting to typha pod | Required when deploying with Calico
| HTTP | 80 | Load balancer/proxy that does external SSL termination | Rancher UI/API when external SSL termination is used |
| HTTPS | 443 | <ul><li>hosted/registered Kubernetes</li><li>any source that needs to be able to use the Rancher UI or API</li></ul> | Rancher agent, Rancher UI/API, kubectl. Not needed if you have a load balancer doing TLS termination. |

Typically all outbound traffic is allowed.
</details>

### Ports for Rancher Server in Docker

<details>
  <summary>Click to expand</summary>

The following tables break down the port requirements for Rancher nodes, for inbound and outbound traffic:

<figcaption>Inbound Rules for Rancher Node</figcaption>

| Protocol | Port | Source | Description
|-----|-----|----------------|---|
| TCP | 80 | Load balancer/proxy that does external SSL termination | Rancher UI/API when external SSL termination is used
| TCP | 443 | <ul><li>hosted/registered Kubernetes</li><li>any source that needs to be able to use the Rancher UI or API</li></ul> | Rancher agent, Rancher UI/API, kubectl

<figcaption>Outbound Rules for Rancher Node</figcaption>

| Protocol | Port | Source | Description |
|-----|-----|----------------|---|
| TCP | 22 | Any node IP from a node created using Node Driver | SSH provisioning of nodes using Node Driver |
| TCP | 443 | git.rancher.io |  Rancher catalog |
| TCP | 2376 | Any node IP from a node created using a node driver | Docker daemon TLS port used by Docker Machine |
| TCP | 6443 | Hosted/Imported Kubernetes API | Kubernetes API server |

</details>

## Downstream Kubernetes Cluster Nodes

Downstream Kubernetes clusters run your apps and services. This section describes what ports need to be opened on the nodes in downstream clusters so that Rancher can communicate with them.

The port requirements differ depending on how the downstream cluster was launched. Each of the tabs below list the ports that need to be opened for different [cluster types](../../../pages-for-subheaders/kubernetes-clusters-in-rancher-setup.md).

The following diagram depicts the ports that are opened for each [cluster type](../../../pages-for-subheaders/kubernetes-clusters-in-rancher-setup.md).

<figcaption>Port Requirements for the Rancher Management Plane</figcaption>

![Basic Port Requirements](/img/port-communications.svg)

:::tip

If security isn't a large concern and you're okay with opening a few additional ports, you can use the table in [Commonly Used Ports](#commonly-used-ports) as your port reference instead of the comprehensive tables below.

:::

### Ports for Harvester Clusters

Refer [here](../../../integrations-in-rancher/harvester.md#port-requirements) for more information on Harvester port requirements.


### Ports for Rancher Launched Kubernetes Clusters using Node Pools

<details>
  <summary>Click to expand</summary>

The following table depicts the port requirements for [Rancher Launched Kubernetes](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md) with nodes created in an [Infrastructure Provider](../../../pages-for-subheaders/use-new-nodes-in-an-infra-provider.md).

:::note

The required ports are automatically opened by Rancher during creation of clusters in cloud providers like Amazon EC2 or DigitalOcean.

:::

 <PortsIaasNodes/>

</details>

### Ports for Rancher Launched Kubernetes Clusters using Custom Nodes

<details>
  <summary>Click to expand</summary>

The following table depicts the port requirements for [Rancher Launched Kubernetes](../../../pages-for-subheaders/launch-kubernetes-with-rancher.md) with [Custom Nodes](../../../pages-for-subheaders/use-existing-nodes.md).

<PortsCustomNodes/>

</details>

### Ports for Hosted Kubernetes Clusters

<details>
  <summary>Click to expand</summary>

The following table depicts the port requirements for [hosted clusters](../../../pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers.md).

<PortsImportedHosted/>

</details>

### Ports for Registered Clusters

:::note

Registered clusters were called imported clusters before Rancher v2.5.

:::

<details>
  <summary>Click to expand</summary>

The following table depicts the port requirements for [registered clusters](../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md).

<PortsImportedHosted/>

</details>


## Other Port Considerations

### Commonly Used Ports

These ports are typically opened on your Kubernetes nodes, regardless of what type of cluster it is.

import CommonPortsTable from '../../../shared-files/_common-ports-table.md';

<CommonPortsTable />

----

### Local Node Traffic

Ports marked as `local traffic` (i.e., `9099 TCP`) in the above requirements are used for Kubernetes healthchecks (`livenessProbe` and`readinessProbe`).
These healthchecks are executed on the node itself. In most cloud environments, this local traffic is allowed by default.

However, this traffic may be blocked when:

- You have applied strict host firewall policies on the node.
- You are using nodes that have multiple interfaces (multihomed).

In these cases, you have to explicitly allow this traffic in your host firewall, or in case of public/private cloud hosted machines (i.e. AWS or OpenStack), in your security group configuration. Keep in mind that when using a security group as source or destination in your security group, explicitly opening ports only applies to the private interface of the nodes / instances.

### Rancher AWS EC2 Security Group

When using the [AWS EC2 node driver](../../../how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md) to provision cluster nodes in Rancher, you can choose to let Rancher create a security group called `rancher-nodes`. The following rules are automatically added to this security group.

|       Type      | Protocol |  Port Range | Source/Destination     | Rule Type |
|-----------------|:--------:|:-----------:|------------------------|:---------:|
|       SSH       |    TCP   | 22          | 0.0.0.0/0              | Inbound   |
|       HTTP      |    TCP   | 80          | 0.0.0.0/0              | Inbound   |
| Custom TCP Rule |    TCP   | 443         | 0.0.0.0/0              | Inbound   |
| Custom TCP Rule |    TCP   | 2376        | 0.0.0.0/0              | Inbound   |
| Custom TCP Rule |    TCP   | 2379-2380   | sg-xxx (rancher-nodes) | Inbound   |
| Custom UDP Rule |    UDP   | 4789        | sg-xxx (rancher-nodes) | Inbound   |
| Custom TCP Rule |    TCP   | 6443        | 0.0.0.0/0              | Inbound   |
| Custom UDP Rule |    UDP   | 8472        | sg-xxx (rancher-nodes) | Inbound   |
| Custom TCP Rule |    TCP   | 10250-10252 | sg-xxx (rancher-nodes) | Inbound   |
| Custom TCP Rule |    TCP   | 10256       | sg-xxx (rancher-nodes) | Inbound   |
| Custom TCP Rule |    TCP   | 30000-32767 | 0.0.0.0/0              | Inbound   |
| Custom UDP Rule |    UDP   | 30000-32767 | 0.0.0.0/0              | Inbound   |
| All traffic     |    All   | All         | 0.0.0.0/0              | Outbound  |

### Opening SUSE Linux Ports

SUSE Linux may have a firewall that blocks all ports by default. To open the ports needed for adding the host to a custom cluster,

<Tabs>
<TabItem value="SLES 15 / openSUSE Leap 15">

1. SSH into the instance.
1. Start YaST in text mode:
    ```
    sudo yast2
    ```

1. Navigate to **Security and Users** > **Firewall** > **Zones:public** > **Ports**. To navigate within the interface, follow the instructions [here](https://doc.opensuse.org/documentation/leap/reference/html/book.opensuse.reference/cha-yast-text.html#sec-yast-cli-navigate).
1. To open the required ports, enter them into the **TCP Ports** and **UDP Ports** fields. In this example, ports 9796 and 10250 are also opened for monitoring. The resulting fields should look similar to the following:
    ```yaml
    TCP Ports
    22, 80, 443, 2376, 2379, 2380, 6443, 9099, 9796, 10250, 10254, 30000-32767
    UDP Ports
    8472, 30000-32767
    ```

1. When all required ports are enter, select **Accept**.

</TabItem>
<TabItem value="SLES 12 / openSUSE Leap 42">

1. SSH into the instance.
1. Edit /`etc/sysconfig/SuSEfirewall2` and open the required ports. In this example, ports 9796 and 10250 are also opened for monitoring:
    ```
    FW_SERVICES_EXT_TCP="22 80 443 2376 2379 2380 6443 9099 9796 10250 10254 30000:32767"
    FW_SERVICES_EXT_UDP="8472 30000:32767"
    FW_ROUTE=yes
    ```
1. Restart the firewall with the new ports:
    ```
    SuSEfirewall2
    ```

</TabItem>
</Tabs>

**Result:** The node has the open ports required to be added to a custom cluster.
