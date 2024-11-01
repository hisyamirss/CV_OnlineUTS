import RowPekerjaan from "./rowPekerjaan";
import RowRiwayat from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold mb-4">Riwayat Pekerjaan</h2>
            </div>
            <RowPekerjaan tahun="2026" instansi="PT. Telkom" sebagai="Programmer" />
            <RowPekerjaan tahun="2028" instansi="Resto Umma Vei" sebagai="Administrator" />
            <RowPekerjaan tahun="2030" instansi="STARK Industry" sebagai="Teknisi" />
            <RowPekerjaan tahun="2032" instansi="OSCORP" sebagai="Ilmuwan" />
        </div>
    );
}