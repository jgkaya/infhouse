import Header from "@/components/Header";
import PackagesTable from "@/components/pages/Packages/PackagesTable";

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-20">
                <PackagesTable />
            </div>
        </main>
    );
}
