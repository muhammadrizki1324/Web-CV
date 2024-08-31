// Prompt muncul sebelum konten halaman ditampilkan
Swal.fire({
   title: 'Masukkan Nama Anda',
   input: 'text',
   inputPlaceholder: 'Nama lengkap',
   allowOutsideClick: false,
   showCancelButton: true,
   confirmButtonText: 'Submit',
   cancelButtonText: 'Batal',
   inputValidator: (value) => {
      if (!value) {
         return 'Nama tidak boleh kosong!';
      }
   },
}).then((result) => {
   if (result.isConfirmed) {
      const nama = result.value;
      Swal.fire(`Halo, ${nama}! Selamat datang.`);
   } else {
      location.reload();
   }
});
