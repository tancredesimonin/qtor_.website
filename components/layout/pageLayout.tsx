import LayoutDefault from "./default";

export declare interface PageLayoutProps {
  children: React.ReactNode;
  h1?: string;
}

export default function PageLayout({ children, h1 }: PageLayoutProps) {
  return (
    <LayoutDefault>
      {h1 && (
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl xl:text-3xl">
          <span className="inline-block text-primary-50">{h1}</span>
        </h1>
      )}
      {children}
    </LayoutDefault>
  );
}
