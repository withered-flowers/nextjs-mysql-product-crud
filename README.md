## Mari Mulai 

1. jalanin mysql dengan perintah `docker compose up -d`
2. hapus folder `.next` dan `node_modules` dengan menggunakan perintah `rm -rf .next node_modules`
3. bikin docker dengan menggunakan perintah `docker build -t <image_name>:<tag> .`
4. menjalankan container docker dengan menggunakan perintah `docker run --rm --network:host <container_name> <image_name>:<tag>`

Ingat untuk membuka port `3307` and `3002` di host.