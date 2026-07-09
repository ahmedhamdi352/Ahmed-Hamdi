import { Container } from "./Container";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
    </Container>
  );
}
