import { NgModule } from "@angular/core";

import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextModule } from "primeng/inputtext";
import { FileUploadModule } from "primeng/fileupload";
import { ToolbarModule } from "primeng/toolbar";
import { RatingModule } from "primeng/rating";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputNumberModule } from "primeng/inputnumber";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { InputTextareaModule } from "primeng/inputtextarea";
import {KeyFilterModule} from 'primeng/keyfilter';
import { MessagesModule } from "primeng/messages";
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {DragDropModule} from 'primeng/dragdrop';
import {TabViewModule} from 'primeng/tabview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';

@NgModule({
  exports: [
    TabViewModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputMaskModule,
    InputTextModule,
    KeyFilterModule,   
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    CheckboxModule,
    MessagesModule,
    DragDropModule,
    ProgressSpinnerModule,
    CardModule
  ],
  providers: [],
  declarations: [],
})
export class PrimeNgModule {}
