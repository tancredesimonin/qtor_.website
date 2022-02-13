export declare interface LayoutProps {
    children: React.ReactNode;
    // pageProperties?: PageProperties;
  }

export default function LayoutDefault({ children }: LayoutProps) {
    return (
        <>
        <main>
            {children}
        </main>
        </>
    )
}