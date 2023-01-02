import { Module } from "@nestjs/common";
import {
  DownloadInvoiceController,
  OrderExportController,
  OrderFilesController,
  OrdersController,
  OrderStatusController,
} from "./orders.controller";
import { OrdersService } from "./orders.service";

@Module({
  controllers: [
    OrdersController,
    OrderStatusController,
    OrderFilesController,
    OrderExportController,
    DownloadInvoiceController,
  ],
  providers: [OrdersService],
})
export class OrdersModule {}
