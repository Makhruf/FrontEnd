import React, { useEffect, useState } from 'react';
import apis from '../../api/mahasiswa';

const UpdateMahasiswa = ({ isOpen, onClose, mhs }) => {
  const [_mhs, setMhs] = useState({ nim: '', nama: '', angkatan: '', prodi: '' });

  // useEffect untuk mengatur nilai _mhs saat mhs berubah
  useEffect(() => {
    setMhs(mhs); // Menetapkan nilai mhs ke _mhs saat prop mhs berubah
  }, [mhs]);

  // Handler untuk mengubah nilai _mhs saat input berubah
  const handleInputChange = (event) => {
    setMhs({
      ..._mhs,
      [event.target.name]: event.target.value
    });
  };

  // Handler untuk mengirimkan data mahasiswa yang diperbarui
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apis.updateMahasiswa(_mhs.nim, _mhs); // Memanggil fungsi updateMahasiswa dengan nilai _mhs
      onClose(); // Menutup form setelah berhasil
    } catch (error) {
      console.error(error); // Menangkap dan mencetak error jika ada
    }
  };

  // Mengembalikan null jika form tidak terbuka (isOpen bernilai false)
  if (!isOpen) {
    return null;
  }

  // Render form untuk memperbarui data mahasiswa
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>NIM:</label>
        <input
          type="text"
          name="nim"
          value={_mhs.nim}
          onChange={handleInputChange}
        />
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={_mhs.nama}
          onChange={handleInputChange}
        />
        <label>Angkatan:</label>
        <input
          type="text"
          name="angkatan"
          value={_mhs.angkatan}
          onChange={handleInputChange}
        />
        <label>Prodi:</label>
        <input
          type="text"
          name="prodi"
          value={_mhs.prodi}
          onChange={handleInputChange}
        />
        <button type="submit">Update Mahasiswa</button>
      </form>
    </div>
  );
};

export default UpdateMahasiswa;
