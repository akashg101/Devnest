import { getImgPath } from '@/utils/imagePath';

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "5.0",
        description: "Average rating across WordPress, Laravel, and Shopify projects",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "50+",
        description: "Successful projects delivered for global clients",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "8+",
        description: "Years of expertise in full-stack web development",
    },
];

export const cardData = [
    {
      iconUrl: getImgPath('/images/build-amazing/beautiful-design.svg'),
      title: 'Modern Web Design',
      description: 'Stunning, responsive designs that captivate users and drive conversions. I create pixel-perfect interfaces that work beautifully across all devices and browsers.',
      link: '/portfolio',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/coded.svg'),
      title: 'Clean Code & Best Practices',
      description: 'Well-architected, maintainable code following industry standards. Every project is built with scalability, performance, and future-proofing in mind.',
      link: '/portfolio',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/amazing.svg'),
      title: 'Fast & Scalable Solutions',
      description: 'High-performance applications optimized for speed and reliability. Built to handle growth, from startups to enterprise-level requirements.',
      link: '/portfolio',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/beautiful-design.svg'),
      title: 'Full-Stack Development',
      description: 'End-to-end solutions covering frontend, backend, databases, and deployment. I handle the complete project lifecycle so you don\'t have to.',
      link: '/portfolio',
    },
];

export const boxData = [
    {
      src: getImgPath('/images/work-grow/mobile-application.jpg'),
      alt: 'Laravel API Project',
      title: 'Scalable Laravel REST API',
      slug: "portfolio-1"
    },
    {
      src: getImgPath('/images/work-grow/weby-dashboard-design.jpg'),
      alt: 'WordPress Dashboard',
      title: 'Custom WordPress Dashboard',
      slug: "portfolio-2"
    },
    {
      src: getImgPath('/images/work-grow/frontend-development.jpg'),
      alt: 'Shopify Theme',
      title: 'Shopify Store Customization',
      slug: "portfolio-3"
    },
    {
      src: getImgPath('/images/work-grow/illustration.jpg'),
      alt: 'PHP Application',
      title: 'Enterprise PHP Application',
      slug: "portfolio-4"
    },
    {
      src: getImgPath('/images/work-grow/financial-image.jpg'),
      alt: 'Website Redesign',
      title: 'Website Redesign & Optimization',
      slug: "portfolio-5"
    },
];

export const accordionData = [
    {
      title: "What is included in WordPress development?",
      content:
        "WordPress development includes custom theme creation, plugin development, performance optimization, security hardening, SEO-ready builds, and ongoing maintenance. I handle everything from design to deployment, ensuring your site is fast, secure, and search engine optimized.",
    },
    {
      title: "How long does a typical Laravel project take?",
      content:
        "Laravel project timelines vary based on complexity. A simple API might take 2-4 weeks, while enterprise applications can take 2-3 months. I provide detailed project estimates after understanding your requirements. Complex projects like custom dashboards and authentication systems are handled with meticulous architecture.",
    },
    {
      title: "Do you provide Shopify store setup and customization?",
      content:
        "Yes! I offer complete Shopify solutions including custom theme development, store setup, payment gateway integration, product optimization, and conversion rate optimization. I also develop custom Shopify apps to extend functionality and create unique shopping experiences.",
    },
    {
      title: "What does website redesign and optimization include?",
      content:
        "Website redesign covers UI/UX improvements, speed optimization, mobile responsiveness, accessibility enhancements, and modern design principles. I analyze your current site, identify bottlenecks, and transform it into a high-performance, user-friendly platform that converts visitors into customers.",
    },
    {
      title: "Do you offer ongoing maintenance and support?",
      content:
        "Absolutely! I provide comprehensive maintenance packages including regular updates, bug fixes, security monitoring, performance optimization, and feature enhancements. Whether you need monthly check-ups or dedicated support, I've got you covered.",
    },
];

export const sections = {
    features: [
      { name: 'WordPress Development', href: '/' },
      { name: 'PHP Solutions', href: '/' },
      { name: 'Laravel APIs', href: '/' },
      { name: 'Shopify Stores', href: '/' },
    ],
    resources: [
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Services', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faqs' },
    ],
    platform: [
      { name: 'Performance Optimization', href: '/' },
      { name: 'Security Hardening', href: '/' },
      { name: 'SEO Services', href: '/' },
      { name: 'Terms and conditions', href: '/' },
      { name: 'Legal', href: '/' },
    ],
  };
