export interface SearchableItem {
    id: string
    label: string
    href: string
    keywords?: string[]
    type: 'page' | 'product' | 'category' | 'action' | 'section'
}

export const searchableItems: SearchableItem[] = [
    // --- Specific Mappings (URLs confirmed based on /app structure) ---
    {
        id: 'gaviones-redirect',
        label: 'Gaviones (por Malla Triple Torsión)',
        href: '/productos/gaviones',
        keywords: ['malla triple torsion', 'gavion', 'contencion', 'muro'],
        type: 'product',
    },
    {
        id: 'puertas-redirect',
        label: 'Puertas',
        href: '/productos/puertas',
        keywords: ['puerta', 'acceso', 'porton', 'entrada'],
        type: 'product',
    },
    {
        id: 'juegos-redirect',
        label: 'Juegos Infantiles',
        href: '/productos/juegos-infantiles',
        keywords: ['juegos', 'parque', 'infantil', 'diversion'],
        type: 'product',
    },
    {
        id: 'tapones-redirect',
        label: 'Tapones',
        href: '/productos/tapones',
        keywords: ['tapon', 'tapa', 'tubo', 'poste', 'accesorio'],
        type: 'product',
    },
    {
        id: 'hoja-vida-redirect',
        label: 'Enviar Hoja de Vida',
        href: '/contacto#trabaja-con-nosotros',
        keywords: ['empleo', 'trabajo', 'vacante', 'cv', 'curriculum', 'hoja de vida'],
        type: 'action',
    },
    {
        id: 'direccion-redirect',
        label: 'Dirección y Contacto',
        href: '/contacto',
        keywords: ['direccion', 'ubicacion', 'telefono', 'email', 'mapa', 'llegar'],
        type: 'page',
    },

    // --- General Pages (Based on /app structure) ---
    {
        id: 'inicio',
        label: 'Inicio',
        href: '/',
        type: 'page',
    },
    {
        id: 'contacto',
        label: 'Contacto',
        href: '/contacto',
        keywords: ['telefono', 'email', 'ubicacion', 'escribenos'],
        type: 'page',
    },
    {
        id: 'nosotros',
        label: 'Nosotros',
        href: '/nosotros',
        keywords: ['empresa', 'quienes somos', 'historia', 'mision', 'vision'],
        type: 'page',
    },
    {
        id: 'productos',
        label: 'Productos',
        href: '/productos',
        keywords: ['catalogo', 'mallas', 'gaviones', 'cerramientos', 'puertas', 'juegos', 'tapones'],
        type: 'page',
    },
    {
        id: 'proyectos',
        label: 'Proyectos',
        href: '/proyectos',
        keywords: ['obras', 'instalaciones', 'casos exito', 'galeria'],
        type: 'page',
    },
    {
        id: 'blog',
        label: 'Blog',
        href: '/blog',
        keywords: ['noticias', 'articulos', 'novedades', 'consejos'],
        type: 'page',
    },
    // --- Product Categories (URLs confirmed based on /app structure) ---
    {
        id: 'mallas',
        label: 'Mallas',
        href: '/productos/mallas',
        keywords: ['eslabonada', 'triple torsion', 'ondulada', 'ganadera', 'cerramiento'],
        type: 'category',
    },
    {
        id: 'gaviones',
        label: 'Gaviones',
        href: '/productos/gaviones',
        keywords: ['contencion', 'muros', 'decorativos', 'piedra'],
        type: 'category',
    },
    {
        id: 'cerramientos',
        label: 'Cerramientos Integrales',
        href: '/productos/cerramientos',
        keywords: ['cercas', 'vallas', 'perimetral', 'seguridad'],
        type: 'category',
    },


    // --- Add other relevant pages, products, or actions ---
    // { id: 'politica-privacidad', label: 'Política de Privacidad', href: '/politica-privacidad', type: 'page'},
    // { id: 'terminos-condiciones', label: 'Términos y Condiciones', href: '/terminos-condiciones', type: 'page'},
]

// Function to potentially fetch dynamic data in the future
// export async function getSearchableItems(): Promise<SearchableItem[]> {
//   // Example: fetch products from an API
//   // const products = await fetch('/api/products').then(res => res.json());
//   // const productItems = products.map(product => ({ ... }));
//   // return [...staticSearchableItems, ...productItems];
//   return searchableItems; // Return static items for now
// } 