---
title: Sample PodSecurityConfiguration
---

The following PodSecurityConfiguration contains the required Rancher namespace exemptions for a `rancher-restricted` cluster to run properly.

```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: AdmissionConfiguration
plugins:
  - name: PodSecurity
    configuration:
      apiVersion: pod-security.admission.config.k8s.io/v1
      kind: PodSecurityConfiguration
      defaults:
        enforce: "restricted"
        enforce-version: "latest"
        audit: "restricted"
        audit-version: "latest"
        warn: "restricted"
        warn-version: "latest"
      exemptions:
        usernames: []
        runtimeClasses: []
        namespaces: [calico-apiserver,
                     calico-system,
                     cattle-alerting,
                     cattle-csp-adapter-system,
                     cattle-epinio-system,
                     cattle-externalip-system,
                     cattle-fleet-local-system,
                     cattle-fleet-system,
                     cattle-gatekeeper-system,
                     cattle-global-data,
                     cattle-global-nt,
                     cattle-impersonation-system,
                     cattle-istio,
                     cattle-istio-system,
                     cattle-logging,
                     cattle-logging-system,
                     cattle-monitoring-system,
                     cattle-neuvector-system,
                     cattle-prometheus,
                     cattle-sriov-system,
                     cattle-system,
                     cattle-ui-plugin-system,
                     cattle-windows-gmsa-system,
                     cert-manager,
                     cis-operator-system,
                     fleet-default,
                     ingress-nginx,
                     istio-system,
                     kube-node-lease,
                     kube-public,
                     kube-system,
                     longhorn-system,
                     rancher-alerting-drivers,
                     security-scan,
                     tigera-operator]
```
