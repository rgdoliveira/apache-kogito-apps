/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import WorkflowFormContext from './WorkflowFormContext';
import { WorkflowFormGatewayApiImpl } from './WorkflowFormGatewayApi';
import {
  DevUIAppContext,
  useDevUIAppContext
} from '../../components/contexts/DevUIAppContext';

interface IOwnProps {
  children;
}

const WorkflowFormContextProvider: React.FC<IOwnProps> = ({ children }) => {
  const runtimeToolsApi: DevUIAppContext = useDevUIAppContext();
  return (
    <WorkflowFormContext.Provider
      value={new WorkflowFormGatewayApiImpl(runtimeToolsApi.getDevUIUrl(), runtimeToolsApi.getOpenApiPath())}
    >
      {children}
    </WorkflowFormContext.Provider>
  );
};

export default WorkflowFormContextProvider;
