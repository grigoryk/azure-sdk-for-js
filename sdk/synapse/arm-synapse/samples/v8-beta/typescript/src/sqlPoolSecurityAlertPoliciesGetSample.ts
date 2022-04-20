/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a Sql pool's security alert policy.
 *
 * @summary Get a Sql pool's security alert policy.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/GetSqlPoolSecurityAlert.json
 */
async function getASecurityAlertOfASqlAnalyticsPool() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "securityalert-6852";
  const workspaceName = "securityalert-2080";
  const sqlPoolName = "testdb";
  const securityAlertPolicyName = "default";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolSecurityAlertPolicies.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    securityAlertPolicyName
  );
  console.log(result);
}

getASecurityAlertOfASqlAnalyticsPool().catch(console.error);
