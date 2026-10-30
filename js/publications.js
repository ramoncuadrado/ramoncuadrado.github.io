// Publication list. To add a paper, copy one entry, put it at the top and edit it.
//   n         number in the CV list
//   status    optional, e.g. "Under review" (entries with a status have no DOI link)
//   first     first or last author
//   corr      corresponding author
//   selected  shown under the "Selected" filter
const PUBLICATIONS = [
  {
    n: 34, year: 2026, status: "Under review",
    title: "Topological engineering of band gap in imine-based covalent organic framework",
    authors: "D. Aparicio, L. Boizas, S. Balestra, R. Cuadrado, V. Mwatati Mwalukuku, J. Anta, P. Aranda, E. García-Frutos, J. Pérez-Carvajal",
    venue: "Journal of Materials Chemistry A"
  },
  {
    n: 33, year: 2026, first: true, corr: true, selected: true,
    title: "Composition-driven magnetic anisotropy and spin polarization in Mn<sub>2</sub>Ru<sub>1−x</sub>Ga Heusler alloy",
    authors: "R. Cuadrado",
    venue: "Physical Review B 113, 144428",
    doi: "10.1103/697n-hl32",
    arxiv: "2509.09540"
  },
  {
    n: 32, year: 2025,
    title: "Modulated optoelectronic properties of MOF/CNF bionanocomposite films for bacterial growth control under visible light",
    authors: "J. D. Guerrero, R. Martín-Sampedro, R. Cuadrado, I. Llano, E. M. García-Frutos, P. Aranda, D. Ibarra, M. E. Eugenio, L. Vázquez, J. Pérez-Carvajal, M. Darder",
    venue: "ACS Applied Materials & Interfaces 17, 30006–30018",
    doi: "10.1021/acsami.5c04982"
  },
  {
    n: 31, year: 2024, selected: true,
    title: "The seventh blind test of crystal structure prediction: structure generation methods",
    authors: "L. M. Hunnisett, …, R. Cuadrado, …, J. C. Cole (154 authors)",
    venue: "Acta Crystallographica B 80, 517–547",
    doi: "10.1107/S2052520624007492"
  },
  {
    n: 30, year: 2023, selected: true,
    title: "Compatibility of DFT+U with non-collinear magnetism and spin-orbit coupling within a framework of numerical atomic orbitals",
    authors: "F. Gómez-Ortiz, N. Carral-Sainz, J. Sifuna, V. Monteseguro, R. Cuadrado, P. García-Fernández, J. Junquera",
    venue: "Computer Physics Communications 286, 108684",
    doi: "10.1016/j.cpc.2023.108684"
  },
  {
    n: 29, year: 2022,
    title: "Electrical control of spin-polarized topological currents in monolayer WTe<sub>2</sub>",
    authors: "J. H. García, J. You, M. García-Mota, P. Koval, P. Ordejón, R. Cuadrado, M. J. Verstraete, Z. Zanolli, S. Roche",
    venue: "Physical Review B 106, L161410",
    doi: "10.1103/PhysRevB.106.L161410"
  },
  {
    n: 28, year: 2021, first: true, corr: true, selected: true,
    title: "Validity of the on-site spin-orbit coupling approximation",
    authors: "R. Cuadrado, R. Robles, A. García, M. Pruneda, P. Ordejón, J. Ferrer, J. I. Cerdá",
    venue: "Physical Review B 104, 195104",
    doi: "10.1103/PhysRevB.104.195104"
  },
  {
    n: 27, year: 2021, first: true, corr: true,
    title: "First principles and atomistic calculation of the magnetic anisotropy of Y<sub>2</sub>Fe<sub>14</sub>B",
    authors: "R. Cuadrado, R. F. L. Evans, T. Shoji, M. Yano, A. Kato, M. Ito, G. Hrkac, T. Schrefl, R. W. Chantrell",
    venue: "Journal of Applied Physics 130, 023901",
    doi: "10.1063/5.0053950"
  },
  {
    n: 26, year: 2020, selected: true,
    title: "Siesta: Recent developments and applications",
    authors: "A. García, N. Papior, …, R. Cuadrado, …, J. Junquera (35 authors)",
    venue: "The Journal of Chemical Physics 152, 204108",
    doi: "10.1063/5.0005077"
  },
  {
    n: 25, year: 2019, first: true, corr: true, selected: true,
    title: "Guidelines for selecting interlayer spacers in synthetic 2D-based antiferromagnets from first-principles simulations",
    authors: "R. Cuadrado, M. Pruneda",
    venue: "Nanomaterials 9, 1764",
    doi: "10.3390/nano9121764"
  },
  {
    n: 24, year: 2018, first: true, corr: true, selected: true,
    title: "Implementation of non-collinear spin-constrained DFT calculations in SIESTA with a fully relativistic Hamiltonian",
    authors: "R. Cuadrado, M. Pruneda, A. García, P. Ordejón",
    venue: "Journal of Physics: Materials 1, 015010",
    doi: "10.1088/2515-7639/aae7db"
  },
  {
    n: 23, year: 2018, first: true, corr: true, selected: true,
    title: "Site-resolved contributions to the magnetic-anisotropy energy and complex spin structure of Fe/MgO sandwiches",
    authors: "R. Cuadrado, L. Oroszlány, A. Deák, T. A. Ostler, A. Meo, R. V. Chepulskii, D. Apalkov, R. F. L. Evans, L. Szunyogh, R. W. Chantrell",
    venue: "Physical Review Applied 9, 054048",
    doi: "10.1103/PhysRevApplied.9.054048"
  },
  {
    n: 22, year: 2018, first: true, corr: true,
    title: "A multiscale model of the effect of Ir thickness on the static and dynamic properties of Fe/Ir/Fe films",
    authors: "R. Cuadrado, L. Oroszlány, L. Szunyogh, G. Hrkac, R. W. Chantrell, T. A. Ostler",
    venue: "Scientific Reports 8, 3879",
    doi: "10.1038/s41598-018-21934-5"
  },
  {
    n: 21, year: 2017, selected: true,
    title: "Graphene-based synthetic antiferromagnets and ferrimagnets",
    authors: "P. Gargiani, R. Cuadrado, H. B. Vasili, M. Pruneda, M. Valvidares",
    venue: "Nature Communications 8, 699",
    doi: "10.1038/s41467-017-00825-9"
  },
  {
    n: 20, year: 2017,
    title: "Multiscale modeling of spin transport across a diffuse interface",
    authors: "J. Chureemart, R. Cuadrado, P. Chureemart, R. W. Chantrell",
    venue: "Journal of Magnetism and Magnetic Materials 443, 287–292",
    doi: "10.1016/j.jmmm.2017.07.085"
  },
  {
    n: 19, year: 2017, selected: true,
    title: "Voltage-induced coercivity reduction in nanoporous alloy films: a boost toward energy-efficient magnetic actuation",
    authors: "A. Quintana, J. Zhang, E. Isarain-Chávez, E. Menéndez, R. Cuadrado, R. Robles, M. D. Baró, M. Guerrero, S. Pané, B. J. Nelson, C. M. Müller, P. Ordejón, J. Nogués, E. Pellicer, J. Sort",
    venue: "Advanced Functional Materials 27, 1701904",
    doi: "10.1002/adfm.201701904"
  },
  {
    n: 18, year: 2016, first: true, corr: true, selected: true,
    title: "In-plane/out-of-plane disorder influence on the magnetic anisotropy of Fe<sub>1−y</sub>Mn<sub>y</sub>Pt-L1<sub>0</sub> bulk alloy",
    authors: "R. Cuadrado, K. Liu, T. J. Klemmer, R. W. Chantrell",
    venue: "Applied Physics Letters 108, 123102",
    doi: "10.1063/1.4944534"
  },
  {
    n: 17, year: 2016,
    title: "First-principles study of the Fe|MgO(001) interface: magnetic anisotropy",
    authors: "T. Bose, R. Cuadrado, R. F. L. Evans, R. V. Chepulskii, D. Apalkov, R. W. Chantrell",
    venue: "Journal of Physics: Condensed Matter 28, 156003",
    doi: "10.1088/0953-8984/28/15/156003"
  },
  {
    n: 16, year: 2015, selected: true,
    title: "Strain induced vortex core switching in planar magnetostrictive nanostructures",
    authors: "T. A. Ostler, R. Cuadrado, R. W. Chantrell, A. W. Rushforth, S. A. Cavill",
    venue: "Physical Review Letters 115, 067202",
    doi: "10.1103/PhysRevLett.115.067202"
  },
  {
    n: 15, year: 2015, first: true, corr: true,
    title: "Interaction potential of FePt with the MgO(001) surface",
    authors: "R. Cuadrado, R. W. Chantrell",
    venue: "Physical Review B 91, 075420",
    doi: "10.1103/PhysRevB.91.075420"
  },
  {
    n: 14, year: 2014, first: true, corr: true, selected: true,
    title: "Magnetic anisotropy of Fe<sub>1−y</sub>X<sub>y</sub>Pt-L1<sub>0</sub> [X = Cr, Mn, Co, Ni, Cu] bulk alloys",
    authors: "R. Cuadrado, T. J. Klemmer, R. W. Chantrell",
    venue: "Applied Physics Letters 105, 152406",
    doi: "10.1063/1.4898574"
  },
  {
    n: 13, year: 2014, first: true, corr: true,
    title: "Interface magnetic moments enhancement of FePt-L1<sub>0</sub>/MgO(001): an ab initio study",
    authors: "R. Cuadrado, R. W. Chantrell",
    venue: "Physical Review B 89, 094407",
    doi: "10.1103/PhysRevB.89.094407"
  },
  {
    n: 12, year: 2013,
    title: "Exchange coupling and magnetic anisotropy at Fe/FePt interfaces",
    authors: "C. J. Aas, P. J. Hasnip, R. Cuadrado, E. M. Plotnikova, L. Szunyogh, L. Udvardi, R. W. Chantrell",
    venue: "Physical Review B 88, 174409",
    doi: "10.1103/PhysRevB.88.174409"
  },
  {
    n: 11, year: 2013, first: true,
    title: "A first principles study of thiol-capped Au nanoparticles: structural, electronic, and magnetic properties as a function of thiol coverage",
    authors: "R. Cuadrado, J. M. Puerta, F. Soria, J. I. Cerdá",
    venue: "The Journal of Chemical Physics 139, 034319",
    doi: "10.1063/1.4813615"
  },
  {
    n: 10, year: 2013,
    title: "Modeling spin injection across diffuse interfaces",
    authors: "P. Chureemart, R. Cuadrado, I. D’Amico, R. W. Chantrell",
    venue: "Physical Review B 87, 195310",
    doi: "10.1103/PhysRevB.87.195310"
  },
  {
    n: 9, year: 2012, first: true, corr: true, selected: true,
    title: "Electronic and magnetic properties of bimetallic L1<sub>0</sub> cuboctahedral clusters by means of fully relativistic density-functional-based calculations",
    authors: "R. Cuadrado, R. W. Chantrell",
    venue: "Physical Review B 86, 224415",
    doi: "10.1103/PhysRevB.86.224415"
  },
  {
    n: 8, year: 2012, first: true, corr: true, selected: true,
    title: "Fully relativistic pseudopotential formalism under an atomic orbital basis: spin–orbit splittings and magnetic anisotropies",
    authors: "R. Cuadrado, J. I. Cerdá",
    venue: "Journal of Physics: Condensed Matter 24, 086005",
    doi: "10.1088/0953-8984/24/8/086005"
  },
  {
    n: 7, year: 2010, first: true,
    title: "CoPc adsorption on Cu(111): origin of the C4 to C2 symmetry reduction",
    authors: "R. Cuadrado, J. I. Cerdá, Y. Wang, G. Xin, R. Berndt, H. Tang",
    venue: "The Journal of Chemical Physics 133, 154701",
    doi: "10.1063/1.3502682"
  },
  {
    n: 6, year: 2010,
    title: "C<sub>60</sub> adsorption on the Si(111)-p(7×7) surface: a theoretical study",
    authors: "R. Rurali, R. Cuadrado, J. I. Cerdá",
    venue: "Physical Review B 81, 075419",
    doi: "10.1103/PhysRevB.81.075419"
  },
  {
    n: 5, year: 2007,
    title: "Magnetic properties of ball-milled Fe<sub>0.6</sub>Mn<sub>0.1</sub>Al<sub>0.3</sub> alloys",
    authors: "A. F. Rebolledo, J. J. Romero, R. Cuadrado, J. M. González, F. Pigazo, F. J. Palomares, M. H. Medina, G. A. Pérez Alcázar",
    venue: "Journal of Magnetism and Magnetic Materials 316, e418–e421",
    doi: "10.1016/j.jmmm.2007.02.166"
  },
  {
    n: 4, year: 2007,
    title: "Crystallization and magnetic hardening of SmCo thin films",
    authors: "J. J. Romero, F. J. Palomares, F. Pigazo, R. Cuadrado, F. Cebollada, A. Hernando, J. M. González",
    venue: "Journal of Non-Crystalline Solids 353, 786–789",
    doi: "10.1016/j.jnoncrysol.2006.12.040"
  },
  {
    n: 3, year: 2006,
    title: "Polymer bonded anisotropic thick hard films for micromotors/microgenerators",
    authors: "J. J. Romero, R. Sastre, F. J. Palomares, F. Pigazo, R. Cuadrado, F. Cebollada, A. Hernando, J. M. González",
    venue: "Journal of Iron and Steel Research International 13, 240–251",
    doi: "10.1016/S1006-706X(08)60188-0"
  },
  {
    n: 2, year: 2006,
    title: "Anisotropic polymer bonded hard-magnetic films for microelectromechanical system applications",
    authors: "J. J. Romero, R. Cuadrado, E. Pina, A. de Hoyos, F. Pigazo, F. J. Palomares, A. Hernando, R. Sastre, J. M. González",
    venue: "Journal of Applied Physics 99, 08N303",
    doi: "10.1063/1.2173210"
  },
  {
    n: 1, year: 2006,
    title: "Temperature dependence of the magnetic properties in LaMnO<sub>3+δ</sub>",
    authors: "F. J. Palomares, F. Pigazo, J. J. Romero, R. Cuadrado, J. M. Alonso, A. Arroyo, R. Cortés-Gil, M. A. García, J. M. González-Calbet, A. Hernando, M. Vallet-Regí, J. M. González",
    venue: "Journal of Applied Physics 99, 08A702",
    doi: "10.1063/1.2150388"
  }
];
