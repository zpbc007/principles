

// https://github.com/webpro/programming-principles?tab=readme-ov-file#kiss

// https://en.wikipedia.org/wiki/List_of_eponymous_laws
const linkData = [
  {
    href: "/wiki/Aitken%27s_law",
    title: "Aitken's law",
  },
  {
    href: "#NewtonSword",
    title: "Newton's flaming laser sword",
  },
  {
    href: "/wiki/Allen%27s_rule",
    title: "Allen's rule",
  },
  {
    href: "/wiki/Amagat%27s_law",
    title: "Amagat's law",
  },
  {
    href: "/wiki/Roy_Amara",
    title: "Roy Amara",
  },
  {
    href: "/wiki/Amdahl%27s_law",
    title: "Amdahl's law",
  },
  {
    href: "/wiki/Amp%C3%A8re%27s_circuital_law",
    title: "Ampère's circuital law",
  },
  {
    href: "/wiki/Anderson%27s_rule",
    title: "Anderson's rule",
  },
  {
    href: "/wiki/Anderson%27s_rule_(computer_science)",
    title: "Anderson's rule (computer science)",
  },
  {
    href: "/wiki/Andy_and_Bill%27s_law",
    title: "Andy and Bill's law",
  },
  {
    href: "/wiki/Archie%27s_law",
    title: "Archie's law",
  },
  {
    href: "/wiki/Lever#History",
    title: "Lever",
  },
  {
    href: "/wiki/Archimedes%27_principle",
    title: "Archimedes' principle",
  },
  {
    href: "/wiki/Artin_reciprocity_law",
    title: "Artin reciprocity law",
  },
  {
    href: "/wiki/Ashby%27s_law",
    title: "Ashby's law",
  },
  {
    href: "/wiki/Three_Laws_of_Robotics",
    title: "Three Laws of Robotics",
  },
  {
    href: "/wiki/Parkinson%27s_law",
    title: "Parkinson's law",
  },
  {
    href: "/wiki/Atwood%27s_law",
    title: "Atwood's law",
  },
  {
    href: "/wiki/Augustine%27s_laws",
    title: "Augustine's laws",
  },
  {
    href: "/wiki/Avogadro%27s_law",
    title: "Avogadro's law",
  },
  {
    href: "/wiki/Babinet%27s_principle",
    title: "Babinet's principle",
  },
  {
    href: "/wiki/Baldwin%27s_rules",
    title: "Baldwin's rules",
  },
  {
    href: "/wiki/Barlow%27s_law",
    title: "Barlow's law",
  },
  {
    href: "/wiki/Bayes%27_theorem",
    title: "Bayes' theorem",
  },
  {
    href: "/wiki/Beckstrom%27s_law",
    title: "Beckstrom's law",
  },
  {
    href: "/wiki/Beer%E2%80%93Lambert_law",
    title: "Beer–Lambert law",
  },
  {
    href: "/wiki/Benford%27s_law",
    title: "Benford's law",
  },
  {
    href: "/wiki/Benford%27s_law_of_controversy",
    title: "Benford's law of controversy",
  },
  {
    href: "/wiki/Bennett%27s_laws",
    title: "Bennett's laws",
  },
  {
    href: "/wiki/Bergmann%27s_rule",
    title: "Bergmann's rule",
  },
  {
    href: "/wiki/Bernoulli%27s_principle",
    title: "Bernoulli's principle",
  },
  {
    href: "/wiki/Betteridge%27s_law_of_headlines",
    title: "Betteridge's law of headlines",
  },
  {
    href: "/wiki/Betz%27s_law",
    title: "Betz's law",
  },
  {
    href: "/wiki/Biot%E2%80%93Savart_law",
    title: "Biot–Savart law",
  },
  {
    href: "/wiki/Birch%27s_law",
    title: "Birch's law",
  },
  {
    href: "/wiki/Bloch%27s_law",
    title: "Bloch's law",
  },
  {
    href: "/wiki/Titius%E2%80%93Bode_law",
    title: "Titius–Bode law",
  },
  {
    href: "/wiki/Born%27s_law",
    title: "Born's law",
  },
  {
    href: "/wiki/Boyle%27s_law",
    title: "Boyle's law",
  },
  {
    href: "/wiki/Bradford%27s_law",
    title: "Bradford's law",
  },
  {
    href: "/wiki/Bragg%27s_law",
    title: "Bragg's law",
  },
  {
    href: "/wiki/Brandolini%27s_law",
    title: "Brandolini's law",
  },
  {
    href: "/wiki/Brewster%27s_law",
    title: "Brewster's law",
  },
  {
    href: "/wiki/Briffault%27s_law",
    title: "Briffault's law",
  },
  {
    href: "/wiki/Brooks%27s_law",
    title: "Brooks's law",
  },
  {
    href: "/wiki/Buys_Ballot%27s_law",
    title: "Buys Ballot's law",
  },
  {
    href: "/wiki/Byerlee%27s_law",
    title: "Byerlee's law",
  },
  {
    href: "/wiki/Campbell%27s_law",
    title: "Campbell's law",
  },
  {
    href: "/wiki/Johann_Ludwig_Casper",
    title: "Johann Ludwig Casper",
  },
  {
    href: "/wiki/Cassie%27s_law",
    title: "Cassie's law",
  },
  {
    href: "/wiki/Cassini%27s_laws",
    title: "Cassini's laws",
  },
  {
    href: "/wiki/Celine%27s_laws",
    title: "Celine's laws",
  },
  {
    href: "/wiki/Chargaff%27s_rules",
    title: "Chargaff's rules",
  },
  {
    href: "/wiki/Charles%27s_law",
    title: "Charles's law",
  },
  {
    href: "/wiki/Chekhov%27s_gun",
    title: "Chekhov's gun",
  },
  {
    href: "/wiki/Cheops_law",
    title: "Cheops law",
  },
  {
    href: "/wiki/Chesterton%27s_fence",
    title: "Chesterton's fence",
  },
  {
    href: "/wiki/Child%27s_law",
    title: "Child's law",
  },
  {
    href: "/wiki/Chladni%27s_law",
    title: "Chladni's law",
  },
  {
    href: "/wiki/Claasen%27s_law",
    title: "Claasen's law",
  },
  {
    href: "/wiki/Clarke%27s_three_laws",
    title: "Clarke's three laws",
  },
  {
    href: "/wiki/Collingridge_dilemma",
    title: "Collingridge dilemma",
  },
  {
    href: "/wiki/Robert_Conquest#Laws_of_politics",
    title: "Robert Conquest",
  },
  {
    href: "/wiki/Conway%27s_law",
    title: "Conway's law",
  },
  {
    href: "/wiki/Martin_Cooper_(inventor)#Cooper's_law",
    title: "Martin Cooper (inventor)",
  },
  {
    href: "/wiki/Cope%27s_rule",
    title: "Cope's rule",
  },
  {
    href: "/wiki/Coulomb%27s_law",
    title: "Coulomb's law",
  },
  {
    href: "/wiki/Cramer%27s_rule",
    title: "Cramer's rule",
  },
  {
    href: "/wiki/Crane%27s_law",
    title: "Crane's law",
  },
  {
    href: "/wiki/Cromwell%27s_rule",
    title: "Cromwell's rule",
  },
  {
    href: "/wiki/Cunningham%27s_law",
    title: "Cunningham's law",
  },
  {
    href: "/wiki/Curie%27s_law",
    title: "Curie's law",
  },
  {
    href: "/wiki/Curie-Weiss_law",
    title: "Curie-Weiss law",
  },
  {
    href: "/wiki/D%27Alembert%27s_principle",
    title: "D'Alembert's principle",
  },
  {
    href: "/wiki/Dahl%27s_law",
    title: "Dahl's law",
  },
  {
    href: "/wiki/Dale%27s_principle",
    title: "Dale's principle",
  },
  {
    href: "/wiki/Dalton%27s_law",
    title: "Dalton's law",
  },
  {
    href: "/wiki/Darcy%27s_law",
    title: "Darcy's law",
  },
  {
    href: "/wiki/Davis%27s_law",
    title: "Davis's law",
  },
  {
    href: "/wiki/De_Morgan%27s_laws",
    title: "De Morgan's laws",
  },
  {
    href: "/wiki/Dermott%27s_law",
    title: "Dermott's law",
  },
  {
    href: "/wiki/De_Vaucouleurs%27_law",
    title: "De Vaucouleurs' law",
  },
  {
    href: "/wiki/Dilbert_principle",
    title: "Dilbert principle",
  },
  {
    href: "/wiki/Doctorow%27s_law",
    title: "Doctorow's law",
  },
  {
    href: "/wiki/Dolbear%27s_law",
    title: "Dolbear's law",
  },
  {
    href: "/wiki/Dollo%27s_law",
    title: "Dollo's law",
  },
  {
    href: "/wiki/Dulong%E2%80%93Petit_law",
    title: "Dulong–Petit law",
  },
  {
    href: "/wiki/Dunbar%27s_number",
    title: "Dunbar's number",
  },
  {
    href: "/wiki/Dunning%E2%80%93Kruger_effect",
    title: "Dunning–Kruger effect",
  },
  {
    href: "/wiki/Duverger%27s_law",
    title: "Duverger's law",
  },
  {
    href: "/wiki/Edholm%27s_law",
    title: "Edholm's law",
  },
  {
    href: "/wiki/Einasto_profile",
    title: "Einasto profile",
  },
  {
    href: "/wiki/Elliott_wave_principle",
    title: "Elliott wave principle",
  },
  {
    href: "/wiki/El-Sayed_rule",
    title: "El-Sayed rule",
  },
  {
    href: "/wiki/Emmert%27s_law",
    title: "Emmert's law",
  },
  {
    href: "/wiki/Engelbart%27s_law",
    title: "Engelbart's law",
  },
  {
    href: "/wiki/Eroom%27s_law",
    title: "Eroom's law",
  },
  {
    href: "/wiki/Euler%27s_laws_of_motion",
    title: "Euler's laws of motion",
  },
  {
    href: "/wiki/Faraday%27s_law_of_induction",
    title: "Faraday's law of induction",
  },
  {
    href: "/wiki/Faraday%27s_law_of_electrolysis",
    title: "Faraday's law of electrolysis",
  },
  {
    href: "/wiki/Fax%C3%A9n%27s_law",
    title: "Faxén's law",
  },
  {
    href: "/wiki/Fick%27s_law_of_diffusion",
    title: "Fick's law of diffusion",
  },
  {
    href: "/wiki/Finagle%27s_law",
    title: "Finagle's law",
  },
  {
    href: "/wiki/Fisher%27s_fundamental_theorem_of_natural_selection",
    title: "Fisher's fundamental theorem of natural selection",
  },
  {
    href: "/wiki/Fitts%27s_law",
    title: "Fitts's law",
  },
  {
    href: "/wiki/Flynn_effect",
    title: "Flynn effect",
  },
  {
    href: "/wiki/Fourier%27s_law",
    title: "Fourier's law",
  },
  {
    href: "/wiki/Frege%27s_principle",
    title: "Frege's principle",
  },
  {
    href: "/wiki/Gall%27s_law",
    title: "Gall's law",
  },
  {
    href: "/wiki/Gause%27s_law",
    title: "Gause's law",
  },
  {
    href: "/wiki/Gauss%27s_law",
    title: "Gauss's law",
  },
  {
    href: "/wiki/Gay-Lussac%27s_law",
    title: "Gay-Lussac's law",
  },
  {
    href: "/wiki/Gell-Mann_amnesia_effect",
    title: "Gell-Mann amnesia effect",
  },
  {
    href: "/wiki/G%C3%A9rson%27s_law",
    title: "Gérson's law",
  },
  {
    href: "/wiki/Gibrat%27s_law",
    title: "Gibrat's law",
  },
  {
    href: "/wiki/Gibson%27s_law",
    title: "Gibson's law",
  },
  {
    href: "/wiki/Ginsberg%27s_theorem",
    title: "Ginsberg's theorem",
  },
  {
    href: "/wiki/Gloger%27s_rule",
    title: "Gloger's rule",
  },
  {
    href: "/wiki/Godwin%27s_law",
    title: "Godwin's law",
  },
  {
    href: "/wiki/Gompertz%E2%80%93Makeham_law_of_mortality",
    title: "Gompertz–Makeham law of mortality",
  },
  {
    href: "/wiki/Goodhart%27s_law",
    title: "Goodhart's law",
  },
  {
    href: "/wiki/Gossen%27s_laws",
    title: "Gossen's laws",
  },
  {
    href: "/wiki/Graham%27s_Hierarchy_of_Disagreement",
    title: "Graham's Hierarchy of Disagreement",
  },
  {
    href: "/wiki/Graham%27s_law",
    title: "Graham's law",
  },
  {
    href: "/wiki/Grassmann%27s_law",
    title: "Grassmann's law",
  },
  {
    href: "/wiki/Grassmann%27s_law_(optics)",
    title: "Grassmann's law (optics)",
  },
  {
    href: "/wiki/Greenspun%27s_tenth_rule",
    title: "Greenspun's tenth rule",
  },
  {
    href: "/wiki/Gresham%27s_law",
    title: "Gresham's law",
  },
  {
    href: "/wiki/Grimm%27s_law",
    title: "Grimm's law",
  },
  {
    href: "/wiki/Grosch%27s_law",
    title: "Grosch's law",
  },
  {
    href: "/wiki/Grotthuss%E2%80%93Draper_law",
    title: "Grotthuss–Draper law",
  },
  {
    href: "/wiki/Gustafson%27s_law",
    title: "Gustafson's law",
  },
  {
    href: "/wiki/Haber%27s_rule",
    title: "Haber's rule",
  },
  {
    href: "/wiki/Hack%27s_law",
    title: "Hack's law",
  },
  {
    href: "/wiki/Hagen%E2%80%93Poiseuille_law",
    title: "Hagen–Poiseuille law",
  },
  {
    href: "/wiki/Haitz%27s_law",
    title: "Haitz's law",
  },
  {
    href: "/wiki/Hamilton%27s_principle",
    title: "Hamilton's principle",
  },
  {
    href: "/wiki/Hanlon%27s_razor",
    title: "Hanlon's razor",
  },
  {
    href: "/wiki/Hartley%27s_law",
    title: "Hartley's law",
  },
  {
    href: "/wiki/Hasse_principle",
    title: "Hasse principle",
  },
  {
    href: "/wiki/Hauser%27s_law",
    title: "Hauser's law",
  },
  {
    href: "/wiki/Heaps%27_law",
    title: "Heaps' law",
  },
  {
    href: "/wiki/Donald_O._Hebb",
    title: "Donald O. Hebb",
  },
  {
    href: "/wiki/Uncertainty_principle",
    title: "Uncertainty principle",
  },
  {
    href: "/wiki/Henry%27s_law",
    title: "Henry's law",
  },
  {
    href: "/wiki/Henry_George_theorem",
    title: "Henry George theorem",
  },
  {
    href: "/wiki/Hertzsprung%E2%80%93Russell_diagram",
    title: "Hertzsprung–Russell diagram",
  },
  {
    href: "/wiki/Hess%27s_law",
    title: "Hess's law",
  },
  {
    href: "/wiki/Hick%27s_law",
    title: "Hick's law",
  },
  {
    href: "/wiki/Hickam%27s_dictum",
    title: "Hickam's dictum",
  },
  {
    href: "/wiki/Hitchens%27s_razor",
    title: "Hitchens's razor",
  },
  {
    href: "/wiki/Hofstadter%27s_law",
    title: "Hofstadter's law",
  },
  {
    href: "/wiki/Hooke%27s_law",
    title: "Hooke's law",
  },
  {
    href: "/wiki/Hotelling%27s_law",
    title: "Hotelling's law",
  },
  {
    href: "/wiki/Hubble%27s_law",
    title: "Hubble's law",
  },
  {
    href: "/wiki/Hume%27s_law",
    title: "Hume's law",
  },
  {
    href: "/wiki/Hume-Rothery_rules",
    title: "Hume-Rothery rules",
  },
  {
    href: "/wiki/Humphrey%27s_law",
    title: "Humphrey's law",
  },
  {
    href: "/wiki/Hund%27s_rules",
    title: "Hund's rules",
  },
  {
    href: "/wiki/Hutber%27s_law",
    title: "Hutber's law",
  },
  {
    href: "/wiki/Hyrum%27s_Law",
    title: "Hyrum's Law",
  },
  {
    href: "/wiki/Isaac_Bonewits#Contributions_to_Neopaganism",
    title: "Isaac Bonewits",
  },
  {
    href: "/wiki/Joule%27s_laws",
    title: "Joule's laws",
  },
  {
    href: "/wiki/Joy%27s_law_(management)",
    title: "Joy's law (management)",
  },
  {
    href: "/wiki/Kepler%27s_laws_of_planetary_motion",
    title: "Kepler's laws of planetary motion",
  },
  {
    href: "/wiki/Kerckhoffs%27s_principle",
    title: "Kerckhoffs's principle",
  },
  {
    href: "/wiki/Gustav_Kirchhoff",
    title: "Gustav Kirchhoff",
  },
  {
    href: "/wiki/Kleiber%27s_law",
    title: "Kleiber's law",
  },
  {
    href: "/wiki/Kluge%27s_law",
    title: "Kluge's law",
  },
  {
    href: "/wiki/Koomey%27s_law",
    title: "Koomey's law",
  },
  {
    href: "/wiki/Kopp%27s_law",
    title: "Kopp's law",
  },
  {
    href: "/wiki/Korte%27s_law",
    title: "Korte's law",
  },
  {
    href: "/wiki/Kranzberg%27s_laws_of_technology",
    title: "Kranzberg's laws of technology",
  },
  {
    href: "/wiki/Kryder%27s_law",
    title: "Kryder's law",
  },
  {
    href: "/wiki/L%27H%C3%B4pital%27s_rule",
    title: "L'Hôpital's rule",
  },
  {
    href: "/wiki/Jean-Baptiste_Lamarck#L'influence_des_circonstances:_The_adaptive_force",
    title: "Jean-Baptiste Lamarck",
  },
  {
    href: "/wiki/Lambert%27s_cosine_law",
    title: "Lambert's cosine law",
  },
  {
    href: "/wiki/Lanchester%27s_laws",
    title: "Lanchester's laws",
  },
  {
    href: "/wiki/Landauer%27s_principle",
    title: "Landauer's principle",
  },
  {
    href: "/wiki/LaSalle%27s_invariance_principle",
    title: "LaSalle's invariance principle",
  },
  {
    href: "/wiki/Leavitt%27s_law",
    title: "Leavitt's law",
  },
  {
    href: "/wiki/Lehman%27s_laws_of_software_evolution",
    title: "Lehman's laws of software evolution",
  },
  {
    href: "/wiki/Identity_of_indiscernibles",
    title: "Identity of indiscernibles",
  },
  {
    href: "/wiki/Lenz%27s_law",
    title: "Lenz's law",
  },
  {
    href: "/wiki/Lem%27s_Law",
    title: "Lem's Law",
  },
  {
    href: "/wiki/Lewis%27s_law",
    title: "Lewis's law",
  },
  {
    href: "/wiki/Lightwood%27s_law",
    title: "Lightwood's law",
  },
  {
    href: "/wiki/Liebig%27s_law_of_the_minimum",
    title: "Liebig's law of the minimum",
  },
  {
    href: "/wiki/Lindy%27s_Law",
    title: "Lindy's Law",
  },
  {
    href: "/wiki/Linus%27s_law",
    title: "Linus's law",
  },
  {
    href: "/wiki/Little%27s_law",
    title: "Little's law",
  },
  {
    href: "/wiki/Littlewood%27s_law",
    title: "Littlewood's law",
  },
  {
    href: "/wiki/Liskov_substitution_principle",
    title: "Liskov substitution principle",
  },
  {
    href: "/wiki/Llin%C3%A1s%27s_law",
    title: "Llinás's law",
  },
  {
    href: "/wiki/Lorentz_force",
    title: "Lorentz force",
  },
  {
    href: "/wiki/Lotka%27s_law",
    title: "Lotka's law",
  },
  {
    href: "/wiki/Lucas_critique",
    title: "Lucas critique",
  },
  {
    href: "/wiki/Madelung_rule",
    title: "Madelung rule",
  },
  {
    href: "/wiki/Maes%E2%80%93Garreau_law",
    title: "Maes–Garreau law",
  },
  {
    href: "/wiki/Malthusian_growth_model",
    title: "Malthusian growth model",
  },
  {
    href: "/wiki/Marconi%27s_law",
    title: "Marconi's law",
  },
  {
    href: "/wiki/Maxwell%27s_equations",
    title: "Maxwell's equations",
  },
  {
    href: "/wiki/Meadow%27s_law",
    title: "Meadow's law",
  },
  {
    href: "/wiki/Mendelian_inheritance",
    title: "Mendelian inheritance",
  },
  {
    href: "/wiki/Menzerath%27s_law",
    title: "Menzerath's law",
  },
  {
    href: "/wiki/Metcalfe%27s_law",
    title: "Metcalfe's law",
  },
  {
    href: "/wiki/Miller%27s_law",
    title: "Miller's law",
  },
  {
    href: "/wiki/Miller%27s_rule_(optics)",
    title: "Miller's rule (optics)",
  },
  {
    href: "/wiki/Intracranial_pressure",
    title: "Intracranial pressure",
  },
  {
    href: "/wiki/Morgan%27s_canon",
    title: "Morgan's canon",
  },
  {
    href: "/wiki/Mooers%27s_law",
    title: "Mooers's law",
  },
  {
    href: "/wiki/Moore%27s_law",
    title: "Moore's law",
  },
  {
    href: "/wiki/Muller%27s_ratchet",
    title: "Muller's ratchet",
  },
  {
    href: "/wiki/Muphry%27s_law",
    title: "Muphry's law",
  },
  {
    href: "/wiki/Murray%27s_law",
    title: "Murray's law",
  },
  {
    href: "/wiki/Murphy%27s_law",
    title: "Murphy's law",
  },
  {
    href: "/wiki/Naismith%27s_rule",
    title: "Naismith's rule",
  },
  {
    href: "/wiki/Navier%E2%80%93Stokes_equations",
    title: "Navier–Stokes equations",
  },
  {
    href: "/wiki/Nernst_equation",
    title: "Nernst equation",
  },
  {
    href: "/wiki/Richard_John_Neuhaus",
    title: "Richard John Neuhaus",
  },
  {
    href: "/wiki/Newton%27s_flaming_laser_sword",
    title: "Newton's flaming laser sword",
  },
  {
    href: "/wiki/Newton%27s_law_of_cooling",
    title: "Newton's law of cooling",
  },
  {
    href: "/wiki/Newton%27s_laws_of_motion",
    title: "Newton's laws of motion",
  },
  {
    href: "/wiki/Nielsen%27s_law",
    title: "Nielsen's law",
  },
  {
    href: "/wiki/Niven%27s_laws",
    title: "Niven's laws",
  },
  {
    href: "/wiki/Noether%27s_theorem",
    title: "Noether's theorem",
  },
  {
    href: "/wiki/Occam%27s_razor",
    title: "Occam's razor",
  },
  {
    href: "/wiki/Oddo%E2%80%93Harkins_rule",
    title: "Oddo–Harkins rule",
  },
  {
    href: "/wiki/Ohm%27s_law",
    title: "Ohm's law",
  },
  {
    href: "/wiki/Ohm%27s_acoustic_law",
    title: "Ohm's acoustic law",
  },
  {
    href: "/wiki/Okrent%27s_law",
    title: "Okrent's law",
  },
  {
    href: "/wiki/Okun%27s_law",
    title: "Okun's law",
  },
  {
    href: "/wiki/Orgel%27s_rule",
    title: "Orgel's rule",
  },
  {
    href: "/wiki/Ostrom%27s_law",
    title: "Ostrom's law",
  },
  {
    href: "/wiki/O%27Sullivan%27s_first_law",
    title: "O'Sullivan's first law",
  },
  {
    href: "/wiki/Overton_window",
    title: "Overton window",
  },
  {
    href: "/wiki/Papert%27s_principle",
    title: "Papert's principle",
  },
  {
    href: "/wiki/Pareto_principle",
    title: "Pareto principle",
  },
  {
    href: "/wiki/Parkinson%27s_law",
    title: "Parkinson's law",
  },
  {
    href: "/wiki/Parkinson%27s_law_of_triviality",
    title: "Parkinson's law of triviality",
  },
  {
    href: "/wiki/Peltzman_effect",
    title: "Peltzman effect",
  },
  {
    href: "/wiki/Peter_principle",
    title: "Peter principle",
  },
  {
    href: "/wiki/Planck%27s_law",
    title: "Planck's law",
  },
  {
    href: "/wiki/Plateau%27s_laws",
    title: "Plateau's laws",
  },
  {
    href: "/wiki/Poe%27s_law",
    title: "Poe's law",
  },
  {
    href: "/wiki/Poisson%27s_law_of_large_numbers",
    title: "Poisson's law of large numbers",
  },
  {
    href: "/wiki/Postel%27s_law",
    title: "Postel's law",
  },
  {
    href: "/wiki/Pournelle%27s_iron_law_of_bureaucracy",
    title: "Pournelle's iron law of bureaucracy",
  },
  {
    href: "/wiki/Prandtl_condition",
    title: "Prandtl condition",
  },
  {
    href: "/wiki/Premack%27s_principle",
    title: "Premack's principle",
  },
  {
    href: "/wiki/Price%27s_law",
    title: "Price's law",
  },
  {
    href: "/wiki/Putt%27s_Law_and_the_Successful_Technocrat",
    title: "Putt's Law and the Successful Technocrat",
  },
  {
    href: "/wiki/Putt%27s_Law_and_the_Successful_Technocrat",
    title: "Putt's Law and the Successful Technocrat",
  },
  {
    href: "/wiki/Pythagorean_theorem",
    title: "Pythagorean theorem",
  },
  {
    href: "/wiki/Ramsey_problem",
    title: "Ramsey problem",
  },
  {
    href: "/wiki/Raoult%27s_law",
    title: "Raoult's law",
  },
  {
    href: "/wiki/Rayleigh%E2%80%93Jeans_law",
    title: "Rayleigh–Jeans law",
  },
  {
    href: "/wiki/Reed%27s_law",
    title: "Reed's law",
  },
  {
    href: "/wiki/Reilly%27s_law_of_retail_gravitation",
    title: "Reilly's law of retail gravitation",
  },
  {
    href: "/wiki/Rent%27s_rule",
    title: "Rent's rule",
  },
  {
    href: "/wiki/Ribot%27s_law",
    title: "Ribot's law",
  },
  {
    href: "/wiki/Ricco%27s_law",
    title: "Ricco's law",
  },
  {
    href: "/wiki/Roemer%27s_law",
    title: "Roemer's law",
  },
  {
    href: "/wiki/Pygmalion_effect",
    title: "Pygmalion effect",
  },
  {
    href: "/wiki/Rothbard%27s_law",
    title: "Rothbard's law",
  },
  {
    href: "/wiki/Russell%27s_teapot",
    title: "Russell's teapot",
  },
  {
    href: "/wiki/Sagan_standard",
    title: "Sagan standard",
  },
  {
    href: "/wiki/Sahm_rule",
    title: "Sahm rule",
  },
  {
    href: "/wiki/Saint-Venant%27s_principle",
    title: "Saint-Venant's principle",
  },
  {
    href: "/wiki/Brandon_Sanderson#Sanderson's_Laws_of_Magic",
    title: "Brandon Sanderson",
  },
  {
    href: "#cite_note-10",
    title: "[10]",
  },
  {
    href: "#cite_note-11",
    title: "[11]",
  },
  {
    href: "#cite_note-12",
    title: "[12]",
  },
  {
    href: "#cite_note-13",
    title: "[13]",
  },
  {
    href: "/wiki/Sapir%E2%80%93Whorf_hypothesis",
    title: "Sapir–Whorf hypothesis",
  },
  {
    href: "/wiki/Sarnoff%27s_law",
    title: "Sarnoff's law",
  },
  {
    href: "/wiki/Say%27s_law",
    title: "Say's law",
  },
  {
    href: "/wiki/Sayre%27s_law",
    title: "Sayre's law",
  },
  {
    href: "/wiki/Schneier%27s_law",
    title: "Schneier's law",
  },
  {
    href: "/wiki/Schottky%E2%80%93Mott_rule",
    title: "Schottky–Mott rule",
  },
  {
    href: "/wiki/Segal%27s_law",
    title: "Segal's law",
  },
  {
    href: "/wiki/Shermer%27s_last_law",
    title: "Shermer's last law",
  },
  {
    href: "/wiki/Shirky_principle",
    title: "Shirky principle",
  },
  {
    href: "/wiki/Sievers%27s_law",
    title: "Sievers's law",
  },
  {
    href: "/wiki/Sieverts%27s_law",
    title: "Sieverts's law",
  },
  {
    href: "/wiki/Smeed%27s_law",
    title: "Smeed's law",
  },
  {
    href: "/wiki/Snell%27s_law",
    title: "Snell's law",
  },
  {
    href: "/wiki/John_F._Sowa#Sowa's_law_of_standards",
    title: "John F. Sowa",
  },
  {
    href: "/wiki/Spearman%27s_hypothesis",
    title: "Spearman's hypothesis",
  },
  {
    href: "/wiki/Spearman%27s_law_of_diminishing_returns",
    title: "Spearman's law of diminishing returns",
  },
  {
    href: "/wiki/Stang%27s_law",
    title: "Stang's law",
  },
  {
    href: "/wiki/Stark%E2%80%93Einstein_law",
    title: "Stark–Einstein law",
  },
  {
    href: "/wiki/Stefan%E2%80%93Boltzmann_law",
    title: "Stefan–Boltzmann law",
  },
  {
    href: "/wiki/Stein%27s_law",
    title: "Stein's law",
  },
  {
    href: "/wiki/Stevens%27s_power_law",
    title: "Stevens's power law",
  },
  {
    href: "/wiki/Stigler%27s_law_of_eponymy",
    title: "Stigler's law of eponymy",
  },
  {
    href: "/wiki/Stokes%27s_law",
    title: "Stokes's law",
  },
  {
    href: "/wiki/Stokes%27s_law_of_sound_attenuation",
    title: "Stokes's law of sound attenuation",
  },
  {
    href: "/wiki/Streisand_effect",
    title: "Streisand effect",
  },
  {
    href: "/wiki/Sturgeon%27s_law",
    title: "Sturgeon's law",
  },
  {
    href: "/wiki/Sutton%27s_law",
    title: "Sutton's law",
  },
  {
    href: "/wiki/Swanson%27s_law",
    title: "Swanson's law",
  },
  {
    href: "/wiki/Szemer%C3%A9nyi%27s_law",
    title: "Szemerényi's law",
  },
  {
    href: "/wiki/Taylor%27s_law",
    title: "Taylor's law",
  },
  {
    href: "/wiki/Teeter%27s_law",
    title: "Teeter's law",
  },
  {
    href: "/wiki/Law_of_conservation_of_complexity",
    title: "Law of conservation of complexity",
  },
  {
    href: "/wiki/Thirlwall%27s_Law",
    title: "Thirlwall's Law",
  },
  {
    href: "/wiki/Titius%E2%80%93Bode_law",
    title: "Titius–Bode law",
  },
  {
    href: "/wiki/Tobler%27s_first_law_of_geography",
    title: "Tobler's first law of geography",
  },
  {
    href: "/wiki/Toms_effect",
    title: "Toms effect",
  },
  {
    href: "/wiki/Triffin_dilemma",
    title: "Triffin dilemma",
  },
  {
    href: "/wiki/Twyman%27s_law",
    title: "Twyman's law",
  },
  {
    href: "/wiki/Van_Loon%27s_law",
    title: "Van Loon's law",
  },
  {
    href: "/wiki/Vegard%27s_law",
    title: "Vegard's law",
  },
  {
    href: "/wiki/Verdoorn%27s_law",
    title: "Verdoorn's law",
  },
  {
    href: "/wiki/Verner%27s_law",
    title: "Verner's law",
  },
  {
    href: "/wiki/Vierordt%27s_law",
    title: "Vierordt's law",
  },
  {
    href: "/wiki/Vop%C4%9Bnka%27s_principle",
    title: "Vopěnka's principle",
  },
  {
    href: "/wiki/Wagner%27s_law",
    title: "Wagner's law",
  },
  {
    href: "/wiki/Walras%27s_law",
    title: "Walras's law",
  },
  {
    href: "/wiki/Weber%E2%80%93Fechner_law",
    title: "Weber–Fechner law",
  },
  {
    href: "/wiki/Weyl_law",
    title: "Weyl law",
  },
  {
    href: "/wiki/Wiedemann%E2%80%93Franz_law",
    title: "Wiedemann–Franz law",
  },
  {
    href: "/wiki/Wien%27s_displacement_law",
    title: "Wien's displacement law",
  },
  {
    href: "/wiki/Wiio%27s_laws",
    title: "Wiio's laws",
  },
  {
    href: "/wiki/Wike%27s_law_of_low_odd_primes",
    title: "Wike's law of low odd primes",
  },
  {
    href: "/wiki/Will_Rogers_phenomenon",
    title: "Will Rogers phenomenon",
  },
  {
    href: "/wiki/Winter%27s_law",
    title: "Winter's law",
  },
  {
    href: "/wiki/Wirth%27s_law",
    title: "Wirth's law",
  },
  {
    href: "/wiki/Wiswesser%27s_rule",
    title: "Wiswesser's rule",
  },
  {
    href: "/wiki/Wolff%27s_law",
    title: "Wolff's law",
  },
  {
    href: "/wiki/Woodward%E2%80%93Hoffmann_rules",
    title: "Woodward–Hoffmann rules",
  },
  {
    href: "/wiki/Experience_curve_effects",
    title: "Experience curve effects",
  },
  {
    href: "/wiki/Yao%27s_principle",
    title: "Yao's principle",
  },
  {
    href: "/wiki/Yerkes%E2%80%93Dodson_law",
    title: "Yerkes–Dodson law",
  },
  {
    href: "/wiki/Zawinski%27s_law",
    title: "Zawinski's law",
  },
  {
    href: "/wiki/Zeeman_effect",
    title: "Zeeman effect",
  },
  {
    href: "/wiki/Zipf%27s_law",
    title: "Zipf's law",
  },
];
