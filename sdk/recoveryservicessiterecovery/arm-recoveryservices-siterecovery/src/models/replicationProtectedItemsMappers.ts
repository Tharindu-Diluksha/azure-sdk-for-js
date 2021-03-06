/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  ReplicationProtectedItemCollection,
  ReplicationProtectedItem,
  Resource,
  BaseResource,
  ReplicationProtectedItemProperties,
  HealthError,
  InnerHealthError,
  CurrentScenarioDetails,
  ReplicationProviderSpecificSettings,
  CloudError,
  EnableProtectionInput,
  EnableProtectionInputProperties,
  EnableProtectionProviderSpecificInput,
  UpdateReplicationProtectedItemInput,
  UpdateReplicationProtectedItemInputProperties,
  VMNicInputDetails,
  UpdateReplicationProtectedItemProviderInput,
  ApplyRecoveryPointInput,
  ApplyRecoveryPointInputProperties,
  ApplyRecoveryPointProviderSpecificInput,
  PlannedFailoverInput,
  PlannedFailoverInputProperties,
  ProviderSpecificFailoverInput,
  DisableProtectionInput,
  DisableProtectionInputProperties,
  DisableProtectionProviderSpecificInput,
  ReverseReplicationInput,
  ReverseReplicationInputProperties,
  ReverseReplicationProviderSpecificInput,
  TestFailoverInput,
  TestFailoverInputProperties,
  TestFailoverCleanupInput,
  TestFailoverCleanupInputProperties,
  UnplannedFailoverInput,
  UnplannedFailoverInputProperties,
  UpdateMobilityServiceRequest,
  UpdateMobilityServiceRequestProperties,
  A2AApplyRecoveryPointInput,
  A2AEnableProtectionInput,
  A2AVmDiskInputDetails,
  A2AVmManagedDiskInputDetails,
  DiskEncryptionInfo,
  DiskEncryptionKeyInfo,
  KeyEncryptionKeyInfo,
  A2AFailoverProviderInput,
  A2AReplicationDetails,
  A2AProtectedDiskDetails,
  A2AProtectedManagedDiskDetails,
  VMNicDetails,
  AzureToAzureVmSyncedConfigDetails,
  RoleAssignment,
  InputEndpoint,
  A2AReprotectInput,
  A2AUpdateReplicationProtectedItemInput,
  A2AVmManagedDiskUpdateDetails,
  Alert,
  AlertProperties,
  Event,
  EventProperties,
  EventProviderSpecificDetails,
  EventSpecificDetails,
  Fabric,
  FabricProperties,
  EncryptionDetails,
  FabricSpecificDetails,
  HyperVReplica2012EventDetails,
  HyperVReplica2012R2EventDetails,
  HyperVReplicaAzureApplyRecoveryPointInput,
  HyperVReplicaAzureEnableProtectionInput,
  HyperVReplicaAzureEventDetails,
  HyperVReplicaAzureFailbackProviderInput,
  HyperVReplicaAzureFailoverProviderInput,
  HyperVReplicaAzureReplicationDetails,
  AzureVmDiskDetails,
  InitialReplicationDetails,
  OSDetails,
  HyperVReplicaAzureReprotectInput,
  HyperVReplicaAzureUpdateReplicationProtectedItemInput,
  HyperVReplicaBaseEventDetails,
  HyperVReplicaBaseReplicationDetails,
  DiskDetails,
  HyperVReplicaBlueReplicationDetails,
  HyperVReplicaReplicationDetails,
  HyperVSiteDetails,
  InMageAzureV2ApplyRecoveryPointInput,
  InMageAzureV2EnableProtectionInput,
  InMageAzureV2EventDetails,
  InMageAzureV2FailoverProviderInput,
  InMageAzureV2ReplicationDetails,
  InMageAzureV2ProtectedDiskDetails,
  InMageAzureV2ReprotectInput,
  InMageAzureV2UpdateReplicationProtectedItemInput,
  InMageDisableProtectionProviderSpecificInput,
  InMageEnableProtectionInput,
  InMageDiskExclusionInput,
  InMageVolumeExclusionOptions,
  InMageDiskSignatureExclusionOptions,
  InMageFailoverProviderInput,
  InMageReplicationDetails,
  OSDiskDetails,
  InMageProtectedDiskDetails,
  InMageAgentDetails,
  InMageReprotectInput,
  Job,
  JobProperties,
  ASRTask,
  TaskTypeDetails,
  GroupTaskDetails,
  JobErrorDetails,
  ServiceError,
  ProviderError,
  JobDetails,
  JobStatusEventDetails,
  JobTaskDetails,
  JobEntity,
  LogicalNetwork,
  LogicalNetworkProperties,
  ManualActionTaskDetails,
  Network,
  NetworkProperties,
  Subnet,
  NetworkMapping,
  NetworkMappingProperties,
  NetworkMappingFabricSpecificSettings,
  Policy,
  PolicyProperties,
  PolicyProviderSpecificDetails,
  ProtectableItem,
  ProtectableItemProperties,
  ConfigurationSettings,
  ProtectionContainer,
  ProtectionContainerProperties,
  ProtectionContainerFabricSpecificDetails,
  ProtectionContainerMapping,
  ProtectionContainerMappingProperties,
  ProtectionContainerMappingProviderSpecificDetails,
  RcmAzureMigrationPolicyDetails,
  RecoveryPlan,
  RecoveryPlanProperties,
  RecoveryPlanGroup,
  RecoveryPlanProtectedItem,
  RecoveryPlanAction,
  RecoveryPlanActionDetails,
  RecoveryPlanAutomationRunbookActionDetails,
  RecoveryPlanGroupTaskDetails,
  RecoveryPlanManualActionDetails,
  RecoveryPlanScriptActionDetails,
  RecoveryPlanShutdownGroupTaskDetails,
  RecoveryPoint,
  RecoveryPointProperties,
  ProviderSpecificRecoveryPointDetails,
  RecoveryServicesProvider,
  RecoveryServicesProviderProperties,
  IdentityInformation,
  VersionDetails,
  ReplicationGroupDetails,
  SanEnableProtectionInput,
  ScriptActionTaskDetails,
  StorageClassification,
  StorageClassificationProperties,
  StorageClassificationMapping,
  StorageClassificationMappingProperties,
  SwitchProtectionJobDetails,
  TestFailoverJobDetails,
  FailoverReplicationProtectedItemDetails,
  VaultHealthDetails,
  VaultHealthProperties,
  ResourceHealthSummary,
  HealthErrorSummary,
  VCenter,
  VCenterProperties,
  VirtualMachineTaskDetails,
  VmmDetails,
  VmmToAzureNetworkMappingSettings,
  VmmToVmmNetworkMappingSettings,
  VmmVirtualMachineDetails,
  VmNicUpdatesTaskDetails,
  VmwareCbtPolicyDetails,
  VMwareDetails,
  ProcessServer,
  MobilityServiceUpdate,
  MasterTargetServer,
  RetentionVolume,
  DataStore,
  RunAsAccount,
  VMwareV2FabricSpecificDetails,
  VMwareVirtualMachineDetails,
  InMageDiskDetails,
  DiskVolumeDetails,
  A2AEventDetails,
  A2APolicyDetails,
  A2AProtectionContainerMappingDetails,
  A2ARecoveryPointDetails,
  AsrJobDetails,
  AutomationRunbookTaskDetails,
  AzureFabricSpecificDetails,
  AzureToAzureNetworkMappingSettings,
  ConsistencyCheckTaskDetails,
  InconsistentVmDetails,
  ExportJobDetails,
  FabricReplicationGroupTaskDetails,
  FailoverJobDetails,
  HyperVReplicaAzurePolicyDetails,
  HyperVReplicaBasePolicyDetails,
  HyperVReplicaBluePolicyDetails,
  HyperVReplicaPolicyDetails,
  HyperVVirtualMachineDetails,
  InlineWorkflowTaskDetails,
  InMageAzureV2PolicyDetails,
  InMageAzureV2RecoveryPointDetails,
  InMageBasePolicyDetails,
  InMagePolicyDetails
} from "../models/mappers";

