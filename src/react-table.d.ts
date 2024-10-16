/* eslint-disable @typescript-eslint/no-unused-vars */
import { RowData } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData = unknown, TValue = unknown> {
    selectOptions?: string[]; // Add the selectOptions property here
  }
}