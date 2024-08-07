import { resolve } from 'path'

export default {
  // config options
  base: "",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alege: resolve(__dirname, 'alege.html'),
        proiecte: resolve(__dirname, 'proiecte.html'),
        despre: resolve(__dirname, 'Despre.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
}