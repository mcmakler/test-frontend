import { NgModule  } from '@angular/core';
import { Store } from '@src/midgard/modules/store/store';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuthUserEpics } from '../../state/authuser/authuser.epics';
import { CoreUserEpics } from '../../state/coreuser/coreuser.epics';
import { WorkflowTeamEpics } from '../../state/workflow-team/workflow-team.epics';
import { WorkflowLevel1Epics } from '../../state/workflow-level1/workflow-level1.epics';
import { WorkflowLevel2Epics } from '../../state/workflow-level2/workflow-level2.epics';
import { ProductsEpics } from '@clients/products/src/lib/state/products.epics.ts';
import { DocumentsEpics } from '@clients/documents/src/lib/state/documents.epics';
import { DashboardsEpics } from '@clients/dashboards/src/lib/state/dashboards.epics';

@NgModule({})
export class MidgardStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MidgardStoreModule,
      providers: [
        Store,
        AuthUserEpics,
        CoreUserEpics,
        WorkflowTeamEpics,
        WorkflowLevel1Epics,
        WorkflowLevel2Epics,
        DocumentsEpics,
        DashboardsEpics,
        ProductsEpics
      ]
    };
  }
}
