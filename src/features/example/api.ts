import { useQuery } from '@tanstack/react-query';

interface ExampleResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchExample(): Promise<ExampleResponse> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useExample() {
  return useQuery({
    queryKey: ['example'],
    queryFn: fetchExample,
  });
}
