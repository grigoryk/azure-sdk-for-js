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
 * This sample demonstrates how to Gets tables of a given schema in a SQL pool.
 *
 * @summary Gets tables of a given schema in a SQL pool.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/ListSqlPoolTables.json
 */
async function listTheTablesOfAGivenSchemaInASqlAnalyticsPool() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "myRG";
  const workspaceName = "serverName";
  const sqlPoolName = "myDatabase";
  const schemaName = "dbo";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sqlPoolTables.listBySchema(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    schemaName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listTheTablesOfAGivenSchemaInASqlAnalyticsPool().catch(console.error);
