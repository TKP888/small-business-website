export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Bathroom Refurbishment",
    shortDescription:
      "Complete bathroom renovation with modern fixtures and tiling.",
    fullDescription:
      "This comprehensive bathroom refurbishment project involved a complete transformation of a dated bathroom into a modern, functional space. The work included removal of all existing fixtures, installation of new plumbing, tiling throughout, and fitting of a new suite including bath, shower, sink, and toilet. The project was completed on schedule with minimal disruption to the household.",
    images: [
      "/services/refurbishment.jpeg",
      "/bristolbridge1.jpeg",
      "/bristolbridge2.jpeg",
    ],
    category: "Refurbishment",
  },
  {
    id: "2",
    title: "Commercial Property Maintenance",
    shortDescription:
      "Ongoing maintenance and repairs for commercial property in Bristol.",
    fullDescription:
      "We provided comprehensive maintenance services for a commercial property in central Bristol. This included regular inspections, emergency repairs, and planned improvement works. The project covered plumbing repairs, electrical work, painting and decorating, and general building maintenance. Our reliable service ensured minimal disruption to the business operations while maintaining high standards throughout.",
    images: [
      "/services/commercial.jpeg",
      "/services/handyman.jpeg",
      "/bristolbridgehero.jpg",
    ],
    category: "Commercial",
  },
  {
    id: "3",
    title: "Kitchen Installation",
    shortDescription:
      "Full kitchen design and installation with carpentry work.",
    fullDescription:
      "A complete kitchen installation project that involved careful planning, custom carpentry work, and professional installation. The project included fitting new units, worktops, and appliances, along with plumbing and electrical work. We worked closely with the client to ensure the design met their needs while maintaining functionality and style. The finished kitchen provides a modern, efficient workspace that the client is delighted with.",
    images: [
      "/services/carpentry.jpeg",
      "/services/refurbishment.jpeg",
      "/bristolbridge1.jpeg",
    ],
    category: "Carpentry",
  },
  {
    id: "4",
    title: "Bathroom Refurbishment",
    shortDescription:
      "Complete bathroom renovation with modern fixtures and tiling.",
    fullDescription:
      "This comprehensive bathroom refurbishment project involved a complete transformation of a dated bathroom into a modern, functional space. The work included removal of all existing fixtures, installation of new plumbing, tiling throughout, and fitting of a new suite including bath, shower, sink, and toilet. The project was completed on schedule with minimal disruption to the household.",
    images: [
      "/services/refurbishment.jpeg",
      "/bristolbridge1.jpeg",
      "/bristolbridge2.jpeg",
    ],
    category: "Refurbishment",
  },
  {
    id: "5",
    title: "Commercial Property Maintenance",
    shortDescription:
      "Ongoing maintenance and repairs for commercial property in Bristol.",
    fullDescription:
      "We provided comprehensive maintenance services for a commercial property in central Bristol. This included regular inspections, emergency repairs, and planned improvement works. The project covered plumbing repairs, electrical work, painting and decorating, and general building maintenance. Our reliable service ensured minimal disruption to the business operations while maintaining high standards throughout.",
    images: [
      "/services/commercial.jpeg",
      "/services/handyman.jpeg",
      "/bristolbridgehero.jpg",
    ],
    category: "Commercial",
  },
  {
    id: "6",
    title: "Kitchen Installation",
    shortDescription:
      "Full kitchen design and installation with carpentry work.",
    fullDescription:
      "A complete kitchen installation project that involved careful planning, custom carpentry work, and professional installation. The project included fitting new units, worktops, and appliances, along with plumbing and electrical work. We worked closely with the client to ensure the design met their needs while maintaining functionality and style. The finished kitchen provides a modern, efficient workspace that the client is delighted with.",
    images: [
      "/services/carpentry.jpeg",
      "/services/refurbishment.jpeg",
      "/bristolbridge1.jpeg",
    ],
    category: "Carpentry",
  },
];

/**
 * Get a project by its id
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projects;
}
