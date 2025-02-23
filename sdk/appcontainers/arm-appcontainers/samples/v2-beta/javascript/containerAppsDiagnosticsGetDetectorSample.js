/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a diagnostics result of a Container App.
 *
 * @summary Get a diagnostics result of a Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ContainerAppsDiagnostics_Get.json
 */
async function getContainerAppDiagnosticsInfo() {
  const subscriptionId = "f07f3711-b45e-40fe-a941-4e6d93f851e6";
  const resourceGroupName = "mikono-workerapp-test-rg";
  const containerAppName = "mikono-capp-stage1";
  const detectorName = "cappcontainerappnetworkIO";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerAppsDiagnostics.getDetector(
    resourceGroupName,
    containerAppName,
    detectorName
  );
  console.log(result);
}

getContainerAppDiagnosticsInfo().catch(console.error);
