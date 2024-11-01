import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN 2 Cangkuang" tahun="2010 - 2016" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Cicalengka" tahun="2016 - 2019" />
            <RowRiwayat jenjang="SMA" sekolah="SMA Bina Muda Cicalengka" tahun="2019 - 2021" />
            <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Masoem University" tahun="2022 - 2026" />
        </div>
    );
}