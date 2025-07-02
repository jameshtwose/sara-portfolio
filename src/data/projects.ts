export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  splineSceneUrl: string;
  gallery: string[];
  challenges: string[];
  solutions: string[];
  results: string;
  client?: string;
  duration?: string;
  year: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: '3D Character Collection',
    category: 'character',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&crop=center',
    description: 'A collection of stylized 3D characters created for various gaming and animation projects.',
    fullDescription: 'This comprehensive character collection showcases my expertise in creating engaging, stylized 3D characters for interactive media. Each character was meticulously crafted with attention to personality, anatomical accuracy, and technical optimization for real-time rendering.',
    technologies: ['Blender', 'Substance Painter', 'ZBrush', 'Spline'],
    splineSceneUrl: 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
    gallery: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=600&fit=crop&crop=center'
    ],
    challenges: [
      'Creating characters optimized for real-time rendering while maintaining visual quality',
      'Developing a consistent art style across diverse character archetypes',
      'Implementing efficient UV mapping and texture workflows'
    ],
    solutions: [
      'Established modular character creation pipeline with reusable components',
      'Developed comprehensive style guide with color palettes and proportion guidelines',
      'Created automated retopology and UV unwrapping workflows'
    ],
    results: 'Successfully delivered 15+ unique characters that exceeded performance requirements while maintaining the desired artistic vision. Characters were implemented across multiple platforms with consistent quality.',
    client: 'Various Gaming Studios',
    duration: '6 months',
    year: '2024'
  },
  {
    id: 2,
    title: 'Real-time Environment',
    category: 'environment',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    description: 'Interactive 3D environment with dynamic lighting and atmospheric effects.',
    fullDescription: 'An immersive real-time 3D environment featuring dynamic weather systems, interactive elements, and optimized performance for web browsers. This project demonstrates advanced real-time rendering techniques and environmental storytelling.',
    technologies: ['Unreal Engine', 'Spline', 'Photoshop', 'Substance Designer'],
    splineSceneUrl: 'https://prod.spline.design/example-environment/scene.splinecode',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop&crop=center'
    ],
    challenges: [
      'Optimizing complex environments for web browser performance',
      'Creating believable atmospheric effects and lighting',
      'Implementing interactive elements without compromising frame rate'
    ],
    solutions: [
      'Implemented LOD system and occlusion culling for performance optimization',
      'Developed custom shaders for atmospheric effects using minimal resources',
      'Created modular interaction system with efficient event handling'
    ],
    results: 'Achieved 60fps performance on mid-range devices while delivering visually stunning environments that enhanced user engagement by 40%.',
    client: 'pax.world',
    duration: '4 months',
    year: '2023'
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center',
    description: 'Complete brand identity package including 3D logo animations and visual guidelines.',
    fullDescription: 'A comprehensive brand identity project that combines traditional graphic design principles with cutting-edge 3D visualization. The project includes logo design, brand guidelines, 3D animations, and interactive brand experiences.',
    technologies: ['Cinema 4D', 'After Effects', 'Illustrator', 'Spline'],
    splineSceneUrl: 'https://prod.spline.design/example-branding/scene.splinecode',
    gallery: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center'
    ],
    challenges: [
      'Creating a cohesive brand identity that works across digital and physical media',
      'Developing 3D elements that enhance rather than distract from brand message',
      'Ensuring scalability and adaptability across various applications'
    ],
    solutions: [
      'Established modular design system with flexible components',
      'Created interactive 3D brand elements using Spline for web integration',
      'Developed comprehensive brand guidelines with technical specifications'
    ],
    results: 'Brand recognition increased by 65% within 6 months of implementation. The 3D interactive elements became a signature differentiator in the market.',
    client: 'Superside',
    duration: '3 months',
    year: '2024'
  },
  {
    id: 4,
    title: 'Product Visualization',
    category: 'product',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center',
    description: 'High-quality product renders and interactive 3D models for e-commerce.',
    fullDescription: 'A comprehensive product visualization project featuring photorealistic renders and interactive 3D models for e-commerce platforms. The project focuses on showcasing product details and functionality through immersive 3D experiences.',
    technologies: ['KeyShot', 'Blender', 'Substance Designer', 'Spline'],
    splineSceneUrl: 'https://prod.spline.design/example-product/scene.splinecode',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center'
    ],
    challenges: [
      'Achieving photorealistic quality while maintaining web performance',
      'Creating accurate material representations across different products',
      'Implementing intuitive interaction controls for product exploration'
    ],
    solutions: [
      'Developed efficient rendering pipeline with optimized texture compression',
      'Created material library with physically-based rendering properties',
      'Implemented user-friendly controls for 360° product viewing'
    ],
    results: 'Product page conversion rates increased by 45% with interactive 3D models. Customer engagement time increased by 180%.',
    client: 'Various E-commerce Brands',
    duration: '5 months',
    year: '2023'
  },
  {
    id: 5,
    title: 'Architectural Visualization',
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
    description: 'Photorealistic architectural renders and virtual walkthroughs.',
    fullDescription: 'High-end architectural visualization project featuring photorealistic renders and immersive virtual walkthroughs. The project combines technical accuracy with artistic vision to help clients visualize their architectural concepts.',
    technologies: ['3ds Max', 'V-Ray', 'Photoshop', 'Spline'],
    splineSceneUrl: 'https://prod.spline.design/example-architecture/scene.splinecode',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center'
    ],
    challenges: [
      'Balancing photorealism with artistic interpretation',
      'Managing large-scale architectural data and complex geometries',
      'Creating immersive walkthroughs that work across devices'
    ],
    solutions: [
      'Developed hybrid rendering approach combining photorealism with stylized elements',
      'Implemented efficient data management and LOD systems',
      'Created responsive virtual tour system optimized for various screen sizes'
    ],
    results: 'Client presentations became 70% more effective in securing project approvals. Virtual tours reduced the need for physical site visits by 50%.',
    client: 'Architectural Firms',
    duration: '8 months',
    year: '2022'
  },
  {
    id: 6,
    title: 'Motion Graphics Suite',
    category: 'motion',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
    description: 'Dynamic motion graphics and animations for digital marketing campaigns.',
    fullDescription: 'A comprehensive motion graphics suite designed for digital marketing campaigns, featuring dynamic animations, interactive elements, and engaging visual narratives that capture audience attention across multiple platforms.',
    technologies: ['After Effects', 'Cinema 4D', 'Octane', 'Spline'],
    splineSceneUrl: 'https://prod.spline.design/example-motion/scene.splinecode',
    gallery: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center'
    ],
    challenges: [
      'Creating engaging animations that work across multiple social media platforms',
      'Optimizing file sizes while maintaining visual quality',
      'Developing a consistent visual language for brand campaigns'
    ],
    solutions: [
      'Created modular animation system with platform-specific exports',
      'Implemented efficient compression techniques and format optimization',
      'Developed animation style guide with timing and easing specifications'
    ],
    results: 'Campaign engagement rates increased by 120%. Motion graphics became the most-shared content type, generating 300% more social media interactions.',
    client: 'Digital Marketing Agencies',
    duration: '4 months',
    year: '2024'
  }
];

export const getProjectById = (id: number): ProjectDetail | undefined => {
  return projectsData.find(project => project.id === id);
};
