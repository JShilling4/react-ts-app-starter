import { useExample } from './api';

export function ExampleComponent() {
  const { data, isLoading, error } = useExample();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-destructive p-4 text-destructive-foreground">
        An error occurred: {error.message}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-card p-4 shadow-lg">
      <h3 className="text-xl font-semibold text-card-foreground">
        Example Data
      </h3>
      <p className="mt-2 text-muted-foreground">{data?.title}</p>
    </div>
  );
}
