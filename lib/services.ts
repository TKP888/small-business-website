export interface Service {
  name: string;
  slug: string;
  description: string;
  image?: string;
}

export const services: Service[] = [
  {
    name: "Commercial",
    slug: "commercial",
    image: "/services/commercial.jpeg",
    description: `If you require prompt assistance with an emergency repair or are planning the replacement or refurbishment of a commercial property, we offer dependable support from start to finish.

With over 10 years of experience, we provide practical, well-managed solutions tailored to the needs of each project. We have worked extensively with businesses and property owners across Bristol, Bath, and South Gloucestershire, delivering a wide range of maintenance, repair, and construction services.

Our approach is straightforward: clear communication, realistic timescales, and workmanship that meets current standards and regulations. Whether responding to urgent issues or undertaking planned improvement works, we aim to minimise disruption while ensuring every job is completed efficiently and to a high standard.`,
  },
  {
    name: "Refurbishments",
    slug: "refurbishments",
    image: "/services/refurbishment.jpeg",
    description: `If you are planning a home improvement project or looking to upgrade your office space, we provide a reliable and well-managed refurbishment service from concept through to completion.

Based in North Bristol, we bring extensive experience across all aspects of building work, property maintenance, and repairs. Our team combines practical expertise with a straightforward approach, ensuring projects are delivered to specification, on schedule, and to a consistently high standard.

We work closely with homeowners and businesses to understand their requirements, offering clear guidance, transparent pricing, and workmanship that stands the test of time.`,
  },
  {
    name: "Handyman",
    slug: "handyman",
    image: "/services/handyman.jpeg",
    description: `For over a decade, we have delivered dependable handyman services covering repairs, refurbishments, and property maintenance. 
    
    Working with homeowners, landlords, and commercial clients, we provide a straightforward, professional service built around quality workmanship and reliability.`,
  },
  {
    name: "Carpentry",
    slug: "carpentry",
    image: "/services/carpentry.jpeg",
    description: `From door hanging through to complete kitchen installations, we provide a comprehensive range of carpentry services for residential and commercial properties. Our experience covers both structural and finishing work, allowing us to manage projects of all sizes with consistency and attention to detail.

We understand that having work carried out in your home or workplace can be disruptive. Our approach is organised, efficient, and respectful of the space we are working in, with a focus on completing jobs cleanly and to specification. We operate across Bristol and South Gloucestershire, delivering reliable carpentry support where it is needed.

Our services include first fix carpentry such as structural timber work to walls, floors, and ceilings, as well as second fix carpentry including doors, skirting, and finishing details. We also carry out full kitchen installations, sash window repairs, drylining, and external works such as decking and fencing. Additional or bespoke carpentry requirements can be discussed as part of the project.`,
  },
  {
    name: "Cleaning",
    slug: "cleaning",
    image: "/services/cleaning.jpeg",
    description: `We provide a professional and thorough cleaning service for both domestic and commercial properties. Our work ranges from targeted stain removal to full property deep cleans, all carried out by an experienced team using appropriate methods and equipment for each surface and environment.

We regularly work with property owners, letting agents, and management companies, delivering reliable end-of-tenancy and move-in or move-out cleans. We also support private homeowners who require carpet and upholstery cleaning to maintain clean, well-presented living spaces.

Our cleaning services cover end-of-tenancy and pre-occupancy cleaning, carpet and upholstery care, and specialist stain removal. We also carry out external pressure washing for walls, paths, and paving, helping to restore outdoor areas and improve the overall appearance of a property.`,
  },
  {
    name: "Decorating",
    slug: "decorating",
    image: "/services/decorating.jpeg",
    description: `If you require a reliable painting and decorating service, I provide a professional, well-managed approach from preparation through to completion. With over a decade of experience, I undertake both residential and commercial projects, delivering consistent workmanship and attention to detail.

I understand the importance of completing work efficiently and with minimal disruption. Each job is carefully planned to ensure a clean, organised process, realistic timescales, and a finish that meets the agreed specification and budget.

Having worked on a wide range of properties, I offer practical decorating solutions that refresh and maintain spaces, whether for ongoing upkeep or full redecoration. Every project is approached with care, clear communication, and a focus on long-lasting results.`,
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    image: "/services/plumbing.jpeg",
    description: `If you need assistance with an emergency repair or are planning the replacement or refurbishment of a residential or commercial property, I provide dependable plumbing and property maintenance services across Bristol and South Gloucestershire. With over a decade of experience, I support clients with both urgent issues and planned works, offering a practical and straightforward service.

I work across a wide range of plumbing requirements, from minor repairs such as leaking taps through to complete bathroom and kitchen refurbishments. Each job is approached with care and attention to detail, ensuring work is completed efficiently and to a high standard.

Plumbing services include radiator and tap replacements, shower and wet room installations, bathroom and kitchen refurbishments, drain unblocking, leak repairs, and the installation of washing machines and dishwashers. Additional maintenance tasks can also be undertaken as required.`,
  },
  {
    name: "Fencing",
    slug: "fencing",
    image: "/services/fencing.jpeg",
    description: `Whether your fencing has been damaged by weather, is showing signs of age, or needs replacing entirely, I provide reliable fencing repairs and installation for residential properties. I work with a range of fencing styles and materials to ensure the finished result is practical, secure, and suited to the property.

Based in the Bristol area, I offer a complete fencing service covering the supply, removal, and installation process. Existing fencing can be repaired where possible, or safely removed and replaced with new fencing as required. All work is carried out efficiently and with consideration for the surrounding area.

I cover Bristol and South Gloucestershire, providing clear advice, straightforward pricing, and a dependable service from initial assessment through to completion. Free, no-obligation quotations are available to help you plan your fencing work with confidence.`,
  },
  {
    name: "Gardening",
    slug: "gardening",
    image: "/services/gardening.jpeg",
    description: `For over a decade, I have provided gardening and property maintenance services to customers across Bristol and South Gloucestershire. I support homeowners, landlords, and property managers with practical garden care throughout the year, from one-off tidy-ups to ongoing maintenance tailored to the needs of the space.

I carry out a wide range of general gardening tasks including lawn care, hedge cutting, cutting back, weeding, turfing, leaf and ivy removal, and full garden clearances with responsible waste removal. Pressure washing and block paving cleaning are also available to help restore paths, patios, and hardstanding areas.

In addition to garden maintenance, I undertake exterior improvement work such as decking, paving, patios, and fencing. All work is completed with a focus on durability, functionality, and a clean, professional finish, whether it forms part of a larger project or a standalone job.`,
  },
  {
    name: "Clearance & Removals",
    slug: "clearance-removals",
    image: "/services/clearance_and_removals.jpeg",
    description: `I provide reliable clearance services for residential and commercial properties, handling everything from the removal of individual items to full property clearances. All items are cleared efficiently, with the property left tidy and swept through on completion.

Garden clearances are also available, including the removal of green waste, debris, and unwanted materials to restore outdoor areas to a clean and manageable condition.

Clearance services can be combined with deep cleaning where required, helping to prepare properties for re-occupation, sale, or marketing. I work with homeowners, landlords, letting agents, and businesses, offering a flexible and straightforward service.

Clearance work includes end-of-tenancy clearances, house and office clearances, garden clearances, and the removal of carpets, curtains, and white goods. I also clear garages, sheds, lofts, cellars, and attics, with all work carried out responsibly and with minimal disruption.`,
  },
];

/**
 * Get a service by its slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Get all service slugs
 */
export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
