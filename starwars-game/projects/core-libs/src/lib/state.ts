export interface State<T> {
  item: T,
  error ?: unknown,
  loading ?: boolean
}
