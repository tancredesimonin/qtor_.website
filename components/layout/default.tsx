import HeaderDefault from "../header/default";

export declare interface LayoutProps {
    children: React.ReactNode;
    // pageProperties?: PageProperties;
  }

export default function LayoutDefault({ children }: LayoutProps) {
    return (
        <>
        <HeaderDefault></HeaderDefault>
        <main>
            {children}
        </main>
        </>
    )
}