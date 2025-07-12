import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({  
    plugins: [    
        tailwindcss(),  
    ],

    // Чтобы при импорте не писать кучу точек и слешей для пути, заменяем их на символ @
    // Для корректной работы подобного надо также добавить файл jsconfig.json с настройками
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})