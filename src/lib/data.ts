export type Category = {
  id: string
  slug: string
  name_de: string
  name_fr: string
  name_en: string
  sort_order: number
}

export type Product = {
  id: string
  slug: string
  category_id: string | null
  name_de: string
  name_fr: string
  name_en: string
  description_de: string | null
  description_fr: string | null
  description_en: string | null
  price_eur: number
  image_url: string | null
  gallery: string[]
  is_hot: boolean
  stock: number
  created_at: string
}

export const categories: Category[] = [
  { id: "cat-1", slug: "trailers", name_de: "Anhänger", name_fr: "Remorques", name_en: "Trailers", sort_order: 1 },
  { id: "cat-2", slug: "lawn-mowers", name_de: "Rasenmäher", name_fr: "Tondeuses", name_en: "Lawn mowers", sort_order: 2 },
  { id: "cat-3", slug: "chainsaws", name_de: "Kettensägen", name_fr: "Tronçonneuses", name_en: "Chainsaws", sort_order: 3 },
  { id: "cat-4", slug: "firewood", name_de: "Brennholz", name_fr: "Bois de chauffage", name_en: "Firewood", sort_order: 4 },
  { id: "cat-5", slug: "accessories", name_de: "Zubehör", name_fr: "Accessoires", name_en: "Accessories", sort_order: 5 },
]

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "2-achsiger-anhanger-304x153-unitrailer-solid-300-2",
    category_id: "cat-1",
    name_de: "2-achsiger Anhänger 304×153 UNITRAILER SOLID 300/2, zulässiges Gesamtgewicht 750 kg",
    name_fr: "Remorque 2 essieux 304×153 UNITRAILER SOLID 300/2, poids total autorisé 750 kg",
    name_en: "2-axle trailer 304×153 UNITRAILER SOLID 300/2, permissible total weight 750 kg",
    description_de: `<h2 class="text-lg font-semibold mb-3">UNITRAILER SOLID 300/2 2-Achs-Anhänger</h2>
<p class="mb-3">UNITRAILER SOLID 300/2 Zweiachsanhänger mit einem zulässigen Gesamtgewicht von bis zu <strong>750 kg</strong>. Dank der abnehmbaren Seitenwände ist er äußerst praktisch und erleichtert das Beladen enorm! Wir kümmern uns um alle Formalitäten.</p>

<h3 class="font-semibold mb-2 mt-5">Erforderliche Dokumente und Lieferung</h3>
<p class="mb-3">Wenn Sie sich für den Kauf eines UNITRAILER SOLID 300/2 Transportanhängers entscheiden, brauchen Sie sich um keine Formalitäten zu kümmern. Wir tun alles, um Ihnen Zeit zu sparen und Sie reibungslos durch den gesamten Bestellprozess zu begleiten. Wir bereiten alle notwendigen Dokumente für Sie vor.</p>
<p class="mb-3">Der gekaufte Anhänger wird mit allen erforderlichen Dokumenten geliefert.</p>
<p class="mb-3">Wenn Sie sich für den Kauf unseres neuen Anhängers entscheiden, profitieren Sie von einer <strong>2-jährigen Garantie</strong> und können ihn somit sorgenfrei nutzen. Jedes Produkt wird mit einer Bedienungsanleitung und einem Garantieheft geliefert. Alle wichtigen Dokumente erhalten Sie zusammen mit Ihrem gekauften Anhänger. Darüber hinaus können Sie jederzeit zusätzliches Zubehör wie Seitenverlängerungen und Diebstahlsicherungen erwerben. Bei Fragen oder Problemen während der Nutzung des Anhängers stehen Ihnen unsere Spezialisten jederzeit gerne zur Verfügung.</p>

<h3 class="font-semibold mb-2 mt-5">Eigenschaften</h3>
<p class="mb-3">Der UNITRAILER SOLID 300/2 Transportanhänger ist für den Materialtransport konzipiert und verfügt über <strong>zwei Achsen</strong>. Das Stützrad erleichtert das Manövrieren im aufrechten Zustand. Die optimale Höhe der Seitenwände und bis zu acht Verzurrpunkte schützen das transportierte Material vor Herunterfallen oder Verschütten.</p>
<p class="mb-3">Die Ladefläche mit den Maßen <strong>304 x 153 x 30 cm</strong> und ein zulässiges Gesamtgewicht von <strong>750 kg</strong> ermöglichen die Verladung großer Materialmengen. Die Langlebigkeit des Anhängers wird durch das hochfeste Stahlchassis und die <strong>9 mm dicke, wasserfeste Sperrholz-Ladefläche</strong> gewährleistet.</p>
<p class="mb-3">Äußerst praktisch dank der Möglichkeit, alle Seitenwände zu öffnen oder zu demontieren, was ein schnelles Be- und Entladen ermöglicht.</p>

<h3 class="font-semibold mb-2 mt-5">Technische Daten – UNITRAILER SOLID 300/2</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li><strong>FAHRGESTELL</strong> – 2 Achsen von Knott oder AL-KO</li>
  <li>Raddimensionen: 155/70 R13</li>
  <li>Timon in einer « V »-Form</li>
  <li>Räder unter dem Boden.</li>
  <li><strong>KAROSSERIE</strong> – Fahrgestell aus gefaltetem, verzinktem Blech</li>
  <li>Die Transportfläche besteht aus 9 mm dickem Sperrholz, ist wasserdicht und rutschfest.</li>
  <li><strong>SEITENBÖDEN</strong> – verzinktes Stahlblech. Klappbare und abnehmbare Seitenwände.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Zubehör</h3>
<p class="mb-2">Zusätzlich können Sie folgendes Zubehör erwerben:</p>
<ul class="list-disc pl-5 space-y-1">
  <li>Aluminiumgeländer</li>
  <li>Aluminium-Seitenwandverlängerungen</li>
  <li>Stahlseitenverlängerungen</li>
  <li>H400 Stahl-Sideboards</li>
  <li>flache Plane</li>
  <li>Plane + Bügel H1400</li>
  <li>Spannnetz</li>
  <li>Diebstahlsicherung</li>
  <li>Radkeile</li>
  <li>Krücken</li>
  <li>Reserveradträger</li>
  <li>Achsstoßdämpfer</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">UNITRAILER SOLID 300/2 Remorque 2 essieux</h2>
<p class="mb-3">Remorque à deux essieux UNITRAILER SOLID 300/2 avec un poids total autorisé en charge allant jusqu'à <strong>750 kg</strong>. Grâce à ses ridelles amovibles, elle est extrêmement pratique et facilite grandement le chargement ! Nous nous occupons de toutes les formalités.</p>

<h3 class="font-semibold mb-2 mt-5">Documents requis et livraison</h3>
<p class="mb-3">Si vous décidez d'acheter une remorque de transport UNITRAILER SOLID 300/2, vous n'avez à vous soucier d'aucune formalité. Nous faisons tout pour vous faire gagner du temps et vous accompagner tout au long du processus de commande. Nous préparons tous les documents nécessaires pour vous.</p>
<p class="mb-3">La remorque achetée est livrée avec tous les documents requis.</p>
<p class="mb-3">En choisissant d'acheter notre nouvelle remorque, vous bénéficiez d'une <strong>garantie de 2 ans</strong> et pouvez l'utiliser en toute sérénité. Chaque produit est livré avec un manuel d'utilisation et un carnet de garantie. Vous recevrez tous les documents importants avec votre remorque. De plus, vous pouvez à tout moment acquérir des accessoires supplémentaires tels que des rehausses de ridelles et des antivols. En cas de questions ou de problèmes pendant l'utilisation de la remorque, nos spécialistes sont à votre disposition.</p>

<h3 class="font-semibold mb-2 mt-5">Caractéristiques</h3>
<p class="mb-3">La remorque de transport UNITRAILER SOLID 300/2 est conçue pour le transport de matériaux et dispose de <strong>deux essieux</strong>. La roue de jockey facilite les manœuvres à l'arrêt. La hauteur optimale des ridelles et jusqu'à huit points d'arrimage protègent le matériau transporté contre les chutes ou les déversements.</p>
<p class="mb-3">La surface de chargement de <strong>304 x 153 x 30 cm</strong> et un poids total autorisé en charge de <strong>750 kg</strong> permettent de charger de grandes quantités de matériaux. La longévité de la remorque est assurée par un châssis en acier à haute résistance et un <strong>plancher en contreplaqué imperméable de 9 mm d'épaisseur</strong>.</p>
<p class="mb-3">Extrêmement pratique grâce à la possibilité d'ouvrir ou de démonter toutes les ridelles, permettant un chargement et déchargement rapides.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques – UNITRAILER SOLID 300/2</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li><strong>CHÂSSIS</strong> – 2 essieux Knott ou AL-KO</li>
  <li>Dimensions des roues : 155/70 R13</li>
  <li>Timon en forme de « V »</li>
  <li>Roues sous le plancher.</li>
  <li><strong>CARROSSERIE</strong> – Châssis en tôle pliée galvanisée</li>
  <li>La surface de transport est en contreplaqué de 9 mm d'épaisseur, imperméable et antidérapante.</li>
  <li><strong>RIDELLES</strong> – Tôle d'acier galvanisée. Ridelles rabattables et amovibles.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Accessoires</h3>
<p class="mb-2">Vous pouvez également acquérir les accessoires suivants :</p>
<ul class="list-disc pl-5 space-y-1">
  <li>Rampes en aluminium</li>
  <li>Rehausses de ridelles en aluminium</li>
  <li>Rehausses de ridelles en acier</li>
  <li>Ridelles en acier H400</li>
  <li>Bâche plate</li>
  <li>Bâche + arceaux H1400</li>
  <li>Filet de chargement</li>
  <li>Antivol</li>
  <li>Cales de roue</li>
  <li>Béquilles</li>
  <li>Support de roue de secours</li>
  <li>Amortisseurs d'essieu</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">UNITRAILER SOLID 300/2 2-axle trailer</h2>
<p class="mb-3">UNITRAILER SOLID 300/2 two-axle trailer with a permissible total weight of up to <strong>750 kg</strong>. Thanks to its removable side walls, it is extremely practical and makes loading much easier! We take care of all the formalities.</p>

<h3 class="font-semibold mb-2 mt-5">Required documents and delivery</h3>
<p class="mb-3">If you decide to purchase a UNITRAILER SOLID 300/2 transport trailer, you don't need to worry about any formalities. We do everything to save you time and guide you smoothly through the entire ordering process. We prepare all the necessary documents for you.</p>
<p class="mb-3">The purchased trailer is delivered with all required documents.</p>
<p class="mb-3">When you choose to buy our new trailer, you benefit from a <strong>2-year warranty</strong> and can use it worry-free. Each product comes with an instruction manual and a warranty booklet. You will receive all important documents together with your purchased trailer. Additionally, you can purchase extra accessories such as side extensions and anti-theft devices at any time. If you have any questions or problems while using the trailer, our specialists are always happy to help.</p>

<h3 class="font-semibold mb-2 mt-5">Features</h3>
<p class="mb-3">The UNITRAILER SOLID 300/2 transport trailer is designed for material transport and features <strong>two axles</strong>. The jockey wheel makes maneuvering easier when uncoupled. The optimal height of the side walls and up to eight lashing points protect the transported material from falling or spilling.</p>
<p class="mb-3">The loading area measuring <strong>304 x 153 x 30 cm</strong> and a permissible total weight of <strong>750 kg</strong> allow for loading large quantities of materials. The trailer's durability is ensured by the high-strength steel chassis and the <strong>9 mm thick, waterproof plywood loading floor</strong>.</p>
<p class="mb-3">Extremely practical thanks to the ability to open or remove all side walls, enabling fast loading and unloading.</p>

<h3 class="font-semibold mb-2 mt-5">Technical specifications – UNITRAILER SOLID 300/2</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li><strong>CHASSIS</strong> – 2 axles from Knott or AL-KO</li>
  <li>Wheel dimensions: 155/70 R13</li>
  <li>V-shaped drawbar</li>
  <li>Wheels under the floor.</li>
  <li><strong>BODY</strong> – Chassis made of folded galvanized sheet metal</li>
  <li>The transport surface is made of 9 mm thick plywood, waterproof and non-slip.</li>
  <li><strong>SIDE BOARDS</strong> – Galvanized steel sheet. Folding and removable side walls.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Accessories</h3>
<p class="mb-2">You can also purchase the following accessories:</p>
<ul class="list-disc pl-5 space-y-1">
  <li>Aluminum ramps</li>
  <li>Aluminum side extensions</li>
  <li>Steel side extensions</li>
  <li>H400 steel side boards</li>
  <li>Flat tarpaulin</li>
  <li>Tarpaulin + hoops H1400</li>
  <li>Tension net</li>
  <li>Anti-theft device</li>
  <li>Wheel chocks</li>
  <li>Corner legs</li>
  <li>Spare wheel carrier</li>
  <li>Axle shock absorbers</li>
</ul>`,
    price_eur: 654.00,
    image_url: "/1-1.png",
    gallery: ["/1-1.png", "/1-2.png", "/1-3.png"],
    is_hot: true,
    stock: 97,
    created_at: "2026-01-15T10:00:00Z",
  },
  {
    id: "prod-2",
    slug: "2-hunde-anhanger-braun",
    category_id: "cat-1",
    name_de: "2-Hunde-Anhänger – braun",
    name_fr: "Remorque pour 2 chiens – marron",
    name_en: "2-dog trailer – brown",
    description_de: `<h2 class="text-lg font-semibold mb-3">2-Hunde-Anhänger – braun</h2>
<ul class="space-y-2">
  <li><strong>Zulässiges Höchstgewicht (PTAC)</strong> – 500 kg</li>
  <li><strong>Leergewicht</strong> – 180 kg</li>
  <li><strong>Nutzlast</strong> – 320 kg</li>
  <li><strong>Mindestleergewicht</strong> – 500 kg</li>
  <li><strong>Maximales Leergewicht</strong> – 500 kg</li>
  <li><strong>Achse</strong> – 1</li>
  <li><strong>Achswiderstand</strong> – 750 kg</li>
  <li><strong>Bremsen</strong> – ohne Bremsen</li>
  <li><strong>Felgengröße</strong> – 13″</li>
  <li><strong>Reserveradoption</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Jockeyrad</strong> – inklusive</li>
  <li><strong>LED-Leuchten</strong> – Nein</li>
</ul>
<p class="mt-3">Position der äußeren Räder<br>Kommerzielle und technische Dokumentation</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque pour 2 chiens – marron</h2>
<ul class="space-y-2">
  <li><strong>Poids total autorisé en charge (PTAC)</strong> – 500 kg</li>
  <li><strong>Poids à vide</strong> – 180 kg</li>
  <li><strong>Charge utile</strong> – 320 kg</li>
  <li><strong>Poids à vide minimum</strong> – 500 kg</li>
  <li><strong>Poids à vide maximum</strong> – 500 kg</li>
  <li><strong>Essieu</strong> – 1</li>
  <li><strong>Capacité d'essieu</strong> – 750 kg</li>
  <li><strong>Freins</strong> – sans freins</li>
  <li><strong>Taille des jantes</strong> – 13″</li>
  <li><strong>Option roue de secours</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Roue de jockey</strong> – incluse</li>
  <li><strong>Feux LED</strong> – Non</li>
</ul>
<p class="mt-3">Position des roues extérieures<br>Documentation commerciale et technique</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">2-dog trailer – brown</h2>
<ul class="space-y-2">
  <li><strong>Permissible maximum weight (GVWR)</strong> – 500 kg</li>
  <li><strong>Unladen weight</strong> – 180 kg</li>
  <li><strong>Payload</strong> – 320 kg</li>
  <li><strong>Minimum unladen weight</strong> – 500 kg</li>
  <li><strong>Maximum unladen weight</strong> – 500 kg</li>
  <li><strong>Axle</strong> – 1</li>
  <li><strong>Axle capacity</strong> – 750 kg</li>
  <li><strong>Brakes</strong> – without brakes</li>
  <li><strong>Rim size</strong> – 13″</li>
  <li><strong>Spare wheel option</strong> –</li>
  <li><strong>Drawbar</strong> – V-shaped</li>
  <li><strong>Jockey wheel</strong> – included</li>
  <li><strong>LED lights</strong> – No</li>
</ul>
<p class="mt-3">Position of outer wheels<br>Commercial and technical documentation</p>`,
    price_eur: 726.00,
    image_url: "/2-1.jpeg",
    gallery: ["/2-1.jpeg", "/2-2.png", "/2-3.jpg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-02-10T10:00:00Z",
  },
  {
    id: "prod-3",
    slug: "2-hundeanhanger-grau",
    category_id: "cat-1",
    name_de: "2-Hundeanhänger – grau",
    name_fr: "Remorque pour 2 chiens – grise",
    name_en: "2-dog trailer – gray",
    description_de: `<h2 class="text-lg font-semibold mb-3">Anhänger für 2 graue Hunde</h2>
<ul class="space-y-2">
  <li><strong>Zulässiges Höchstgewicht (PTAC)</strong> – 500 kg</li>
  <li><strong>Leergewicht</strong> – 180 kg</li>
  <li><strong>Nutzlast</strong> – 320 kg</li>
  <li><strong>Mindestleergewicht</strong> – 500 kg</li>
  <li><strong>Maximales Leergewicht</strong> – 500 kg</li>
  <li><strong>Achse</strong> – 1</li>
  <li><strong>Achswiderstand</strong> – 750 kg</li>
  <li><strong>Bremsen</strong> – ohne Bremsen</li>
  <li><strong>Felgengröße</strong> – 13″</li>
  <li><strong>Reserveradoption</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Jockeyrad</strong> – inklusive</li>
  <li><strong>LED-Leuchten</strong> – Nein</li>
</ul>
<p class="mt-3">Position der äußeren Räder<br>Kommerzielle und technische Dokumentation</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque pour 2 chiens – grise</h2>
<ul class="space-y-2">
  <li><strong>Poids total autorisé en charge (PTAC)</strong> – 500 kg</li>
  <li><strong>Poids à vide</strong> – 180 kg</li>
  <li><strong>Charge utile</strong> – 320 kg</li>
  <li><strong>Poids à vide minimum</strong> – 500 kg</li>
  <li><strong>Poids à vide maximum</strong> – 500 kg</li>
  <li><strong>Essieu</strong> – 1</li>
  <li><strong>Capacité d'essieu</strong> – 750 kg</li>
  <li><strong>Freins</strong> – sans freins</li>
  <li><strong>Taille des jantes</strong> – 13″</li>
  <li><strong>Option roue de secours</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Roue de jockey</strong> – incluse</li>
  <li><strong>Feux LED</strong> – Non</li>
</ul>
<p class="mt-3">Position des roues extérieures<br>Documentation commerciale et technique</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">2-dog trailer – gray</h2>
<ul class="space-y-2">
  <li><strong>Permissible maximum weight (GVWR)</strong> – 500 kg</li>
  <li><strong>Unladen weight</strong> – 180 kg</li>
  <li><strong>Payload</strong> – 320 kg</li>
  <li><strong>Minimum unladen weight</strong> – 500 kg</li>
  <li><strong>Maximum unladen weight</strong> – 500 kg</li>
  <li><strong>Axle</strong> – 1</li>
  <li><strong>Axle capacity</strong> – 750 kg</li>
  <li><strong>Brakes</strong> – without brakes</li>
  <li><strong>Rim size</strong> – 13″</li>
  <li><strong>Spare wheel option</strong> –</li>
  <li><strong>Drawbar</strong> – V-shaped</li>
  <li><strong>Jockey wheel</strong> – included</li>
  <li><strong>LED lights</strong> – No</li>
</ul>
<p class="mt-3">Position of outer wheels<br>Commercial and technical documentation</p>`,
    price_eur: 799.00,
    image_url: "/3-1.jpeg",
    gallery: ["/3-1.jpeg", "/3-2.jpg", "/3-3.jpg"],
    is_hot: true,
    stock: 96,
    created_at: "2026-03-05T10:00:00Z",
  },
  {
    id: "prod-4",
    slug: "2-schienen-motorradanhanger-unitrailer-moto-2",
    category_id: "cat-1",
    name_de: "2-Schienen-Motorradanhänger UNITRAILER MOTO 2",
    name_fr: "Remorque moto 2 rails UNITRAILER MOTO 2",
    name_en: "2-rail motorcycle trailer UNITRAILER MOTO 2",
    description_de: `<h2 class="text-lg font-semibold mb-3">2-Schienen-Motorradanhänger UNITRAILER MOTO 2</h2>
<p class="mb-3">Zweischienen-Motorradanhänger für den Transport von zwei Motorrädern. Unser UNITRAILER MOTO 2 ist ein äußerst praktisches Modell, ideal für den Transport von zwei Motorrädern. Wir haben einen Anhänger entwickelt, mit dem Sie bis zu zwei Motorräder einfach und schnell verladen und transportieren können.</p>
<p class="mb-3">Leichter Anhänger für den Transport von zwei Motorrädern, europäische Zulassung.</p>
<p class="mb-3">Der Unitrailer Moto 2 wird mit allen erforderlichen Dokumenten geliefert.</p>
<p class="mb-3">Transportschienenlänge: 1,5 m / 1,9 m. Zulässiges Gesamtgewicht (PTAC): <strong>750 kg</strong>.</p>
<p class="mb-3">Mit dem neuen MOTO 2-Anhänger transportieren Sie Ihre Motorräder überall hin. Das zulässige Gesamtgewicht (PTAC) des MOTO-Anhängers liegt zwischen 300 und 750 kg.</p>

<h3 class="font-semibold mb-2 mt-5">Abmessungen</h3>
<p class="mb-1"><strong>Gesamtabmessungen des Anhängers:</strong></p>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Länge: 3160 mm</li>
  <li>Breite: 1670 mm</li>
  <li>Höhe: 784 mm</li>
</ul>
<p class="mb-1"><strong>Abmessungen des Laderaums:</strong></p>
<ul class="list-disc pl-5 space-y-1">
  <li>Länge: 2200 mm</li>
  <li>Breite: 1303 mm</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque moto 2 rails UNITRAILER MOTO 2</h2>
<p class="mb-3">Remorque moto à deux rails pour le transport de deux motos. Notre UNITRAILER MOTO 2 est un modèle extrêmement pratique, idéal pour le transport de deux motos. Nous avons développé une remorque qui vous permet de charger et transporter facilement et rapidement jusqu'à deux motos.</p>
<p class="mb-3">Remorque légère pour le transport de deux motos, homologation européenne.</p>
<p class="mb-3">La remorque Unitrailer Moto 2 est livrée avec tous les documents nécessaires.</p>
<p class="mb-3">Longueur des rails de transport : 1,5 m / 1,9 m. Poids total autorisé en charge (PTAC) : <strong>750 kg</strong>.</p>
<p class="mb-3">Avec la nouvelle remorque MOTO 2, transportez vos motos partout. Le PTAC de la remorque MOTO est compris entre 300 et 750 kg.</p>

<h3 class="font-semibold mb-2 mt-5">Dimensions</h3>
<p class="mb-1"><strong>Dimensions hors tout de la remorque :</strong></p>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Longueur : 3160 mm</li>
  <li>Largeur : 1670 mm</li>
  <li>Hauteur : 784 mm</li>
</ul>
<p class="mb-1"><strong>Dimensions du compartiment de charge :</strong></p>
<ul class="list-disc pl-5 space-y-1">
  <li>Longueur : 2200 mm</li>
  <li>Largeur : 1303 mm</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">2-rail motorcycle trailer UNITRAILER MOTO 2</h2>
<p class="mb-3">Two-rail motorcycle trailer for transporting two motorcycles. Our UNITRAILER MOTO 2 is an extremely practical model, ideal for transporting two motorcycles. We have developed a trailer that allows you to easily and quickly load and transport up to two motorcycles.</p>
<p class="mb-3">Lightweight trailer for transporting two motorcycles, European approval.</p>
<p class="mb-3">The Unitrailer Moto 2 is delivered with all required documents.</p>
<p class="mb-3">Transport rail length: 1.5 m / 1.9 m. Permissible total weight (GVWR): <strong>750 kg</strong>.</p>
<p class="mb-3">With the new MOTO 2 trailer, transport your motorcycles anywhere. The GVWR of the MOTO trailer is between 300 and 750 kg.</p>

<h3 class="font-semibold mb-2 mt-5">Dimensions</h3>
<p class="mb-1"><strong>Overall trailer dimensions:</strong></p>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Length: 3160 mm</li>
  <li>Width: 1670 mm</li>
  <li>Height: 784 mm</li>
</ul>
<p class="mb-1"><strong>Cargo compartment dimensions:</strong></p>
<ul class="list-disc pl-5 space-y-1">
  <li>Length: 2200 mm</li>
  <li>Width: 1303 mm</li>
</ul>
<p class="mt-3">The UNITRAILER MOTO 2 tilting motorcycle trailer is perfect for transporting three motorcycles. Maximum permissible weight 750 kg. Supplied with folding drawbar. Order directly with immediate delivery.</p>`,
    price_eur: 401.00,
    image_url: "/4-1.jpg",
    gallery: ["/4-1.jpg", "/4-2.png", "/4-3.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-03-20T10:00:00Z",
  },
  {
    id: "prod-5",
    slug: "200x106-gitteranhaenger-mit-blauer-flachplane-garden-trailer-200-kipp",
    category_id: "cat-1",
    name_de: "200×106 Gitteranhänger mit blauer Flachplane, Gitterwänden und Stützrad – Garden Trailer 200 KIPP",
    name_fr: "Remorque grillagée 200×106 avec bâche plate bleue, parois grillagées et roue de jockey – Garden Trailer 200 KIPP",
    name_en: "200×106 mesh trailer with blue flat tarpaulin, mesh walls and jockey wheel – Garden Trailer 200 KIPP",
    description_de: `<h2 class="text-lg font-semibold mb-3">KIPP Gartenanhänger 200 Maschenanhänger</h2>
<p class="mb-3">Großer Kippanhänger mit blauer Ladefläche, Gitterwänden und Stützrad, Modell Garden Trailer 200 KIPP. Dank seiner großzügigen Ladefläche von 200 x 106 cm ermöglicht dieser Anhänger den Transport schwerer Lasten oder sperriger Gegenstände, die normalerweise nicht in Ihr Auto passen. Das zulässige Gesamtgewicht (GZG) von <strong>750 kg</strong> erlaubt es jedem Fahrer, den Anhänger sicher an der Anhängerkupplung zu befestigen. Die hohe Plane mit Bügeln und Seitenverlängerungen bietet zusätzlichen Schutz für Ihre Ladung. Durch die Verwendung einer modernen AL-KO- oder KNOTT-Lenkachse garantieren wir, dass auch bei leerer Ladefläche kein Schlagloch Probleme bereitet. Mit unserem großen Kippanhänger, Modell Garden Trailer 200 KIPP, transportieren Sie Ihre Güter stets komfortabel und sicher.</p>

<h3 class="font-semibold mb-2 mt-5">Direkt zu Ihnen nach Hause geliefert, inklusive aller notwendigen Dokumente!</h3>
<p class="mb-3">Unser großer Kippanhänger wird Ihnen per Kurier direkt nach Hause geliefert. Sie müssen sich keine Gedanken um die Montage machen, denn der Anhänger wird komplett montiert und sofort einsatzbereit geliefert. Darüber hinaus erhalten Sie alle notwendigen Dokumente, inklusive Mehrwertsteuerrechnung, Zulassungsbescheinigung und Typgenehmigung. UNITRAILER-Anhänger sind für ihre außergewöhnliche Langlebigkeit bekannt und verfügen über eine <strong>2-jährige Garantie</strong>, die an über 150 Standorten in ganz Europa gilt.</p>

<h3 class="font-semibold mb-2 mt-5">Was sind die Vorteile unseres großen Kippanhängers mit Seitenaufsätzen, hoher Plane, Bügel und Stützrad?</h3>
<p class="mb-3">Neben einem außergewöhnlich großen Laderaum bieten wir Ihnen auch Seitenaufsätze inklusive hoher Plane und Spannbügel, die Ihre Ladung vor Wind und Wetter schützen. Das ebenfalls mitgelieferte Stützrad erleichtert das Manövrieren des Anhängers im abgekoppelten Zustand. Dank der klappbaren Deichsel können Sie den Anhänger kippen und so deutlich schneller be- und entladen. Diese Funktion findet sich normalerweise nur bei höherwertigen Anhängern, die oft wesentlich teurer sind.</p>
<p class="mb-3">Der Anhänger eignet sich ideal für Reparaturen, den Transport von Möbeln, Holz, Baumaterialien, Werkzeug und allem, was Sie bisher im Auto transportiert haben. Mit den zusätzlichen Seitenaufsätzen und der hohen Plane mit Spannbügel erreichen Sie eine Laderaumhöhe von bis zu <strong>70 cm</strong>.</p>
<p class="mb-3">Optional können Sie Seitenstützen, Bodenverzurrösen, ein Ladungsnetz montieren oder ein Reserverad bzw. Radkeile erwerben. Die Anpassung Ihres Anhängers an Ihre Bedürfnisse ist kinderleicht.</p>
<p class="mb-3">Sie fragen sich, wo Sie Ihren Anhänger abstellen können, wenn Sie ihn von der Anhängerkupplung abkoppeln? Sie brauchen keine Garage! Dank der klappbaren Deichsel unserer Anhänger können Sie ihn überall auf der Heckklappe platzieren oder an Ihr Haus lehnen, ohne sich Sorgen um Beschädigungen machen zu müssen.</p>

<h3 class="font-semibold mb-2 mt-5">Technische Daten unseres großen Gartenanhängers 200 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li><strong>FAHRGESTELL</strong> – neue Einzelachse der renommierten Marke AL-KO oder KNOTT mit unabhängiger Federung auf Basis des Drehstabes, die sehr gute Fahreigenschaften bietet.</li>
  <li>Klappbare V-förmige Deichsel mit Festmacherring der Marke WINTERHOFF mit Befestigungsanzeige und Stahl-Abreißseil.</li>
  <li>155/70 R13 Ganzjahresreifen, die Unebenheiten der Straße ausgleichen und für ein komfortables Fahrgefühl sorgen.</li>
  <li>Profilierte Abdeckung aus feuerverzinktem und verschraubtem Stahlblech – sehr langlebig</li>
  <li><strong>BOX</strong> – rutschfester Boden aus wasserfest verleimtem Sperrholz (9 mm dick).</li>
  <li><strong>SIDEBOARDS</strong> – Gesamthöhe 70 cm (30 cm Basis-Sideboards und 40 cm zusätzliche Sideboards), hergestellt aus verzinktem Stahlblech mit Korrosionsschutz und gewellt für größere Stabilität.</li>
  <li>Seitenwände mit Befestigungselementen, die ein ordnungsgemäßes Spannen der Plane ermöglichen. Heckklappe, die sich öffnen und vollständig abnehmen lässt.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Zubehör</h3>
<p class="mb-2">Sie können außerdem folgendes Zubehör erwerben:</p>
<ul class="list-disc pl-5 space-y-1">
  <li>Spannnetz</li>
  <li>Befestigungselemente</li>
  <li>Lätzchen</li>
  <li>Krücken</li>
  <li>Diebstahlsicherung</li>
  <li>Reserverad mit Montagesatz</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque grillagée 200×106 avec bâche plate bleue – Garden Trailer 200 KIPP</h2>
<p class="mb-3">Grande remorque basculante avec plateau bleu, parois grillagées et roue de jockey, modèle Garden Trailer 200 KIPP. Grâce à son généreux plateau de chargement de 200 x 106 cm, cette remorque permet le transport de charges lourdes ou d'objets encombrants qui ne tiennent normalement pas dans votre voiture. Le poids total autorisé en charge (PTAC) de <strong>750 kg</strong> permet à tout conducteur d'attacher la remorque en toute sécurité à l'attelage. La bâche haute avec arceaux et rehausses latérales offre une protection supplémentaire pour votre chargement. Grâce à l'utilisation d'un essieu directionnel moderne AL-KO ou KNOTT, nous garantissons qu' même à vide, aucun nid-de-poule ne posera problème. Avec notre grande remorque basculante, modèle Garden Trailer 200 KIPP, transportez vos marchandises toujours confortablement et en toute sécurité.</p>

<h3 class="font-semibold mb-2 mt-5">Livré directement chez vous, avec tous les documents nécessaires !</h3>
<p class="mb-3">Notre grande remorque basculante vous est livrée directement chez vous par coursier. Vous n'avez pas à vous soucier du montage, car la remorque est livrée complètement montée et prête à l'emploi. De plus, vous recevez tous les documents nécessaires, y compris la facture TVA, le certificat d'immatriculation et l'homologation de type. Les remorques UNITRAILER sont réputées pour leur durabilité exceptionnelle et bénéficient d'une <strong>garantie de 2 ans</strong> valable dans plus de 150 points de service à travers l'Europe.</p>

<h3 class="font-semibold mb-2 mt-5">Quels sont les avantages de notre grande remorque basculante avec rehausses, bâche haute, arceaux et roue de jockey ?</h3>
<p class="mb-3">En plus d'un espace de chargement exceptionnellement grand, nous vous offrons des rehausses latérales avec bâche haute et arceaux de tension qui protègent votre chargement des intempéries. La roue de jockey fournie facilite les manœuvres de la remorque lorsqu'elle est dételée. Grâce au timon rabattable, vous pouvez basculer la remorque et charger/décharger beaucoup plus rapidement. Cette fonction ne se trouve normalement que sur les remorques haut de gamme, souvent beaucoup plus chères.</p>
<p class="mb-3">La remorque est idéale pour les réparations, le transport de meubles, de bois, de matériaux de construction, d'outils et de tout ce que vous transportiez auparavant dans votre voiture. Avec les rehausses latérales supplémentaires et la bâche haute avec arceaux de tension, vous atteignez une hauteur de chargement allant jusqu'à <strong>70 cm</strong>.</p>
<p class="mb-3">En option, vous pouvez monter des stabilisateurs latéraux, des anneaux d'arrimage au sol, un filet de chargement ou acheter une roue de secours ou des cales de roue. Adapter votre remorque à vos besoins est un jeu d'enfant.</p>
<p class="mb-3">Vous vous demandez où ranger votre remorque lorsque vous la déconnectez de l'attelage ? Vous n'avez pas besoin de garage ! Grâce au timon rabattable de nos remorques, vous pouvez la placer n'importe où contre le hayon ou l'appuyer contre votre maison sans craindre de l'endommager.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques de notre grande remorque de jardin 200 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li><strong>CHÂSSIS</strong> – Nouvel essieu simple de la marque réputée AL-KO ou KNOTT avec suspension indépendante à barre de torsion, offrant d'excellentes caractéristiques de conduite.</li>
  <li>Timon rabattable en V avec anneau d'attelage de la marque WINTERHOFF avec indicateur de fixation et câble de rupture en acier.</li>
  <li>Pneus 155/70 R13 toutes saisons qui absorbent les irrégularités de la route et assurent un confort de conduite agréable.</li>
  <li>Plancher profilé en tôle d'acier galvanisée à chaud et vissée – très durable</li>
  <li><strong>CAISSE</strong> – Plancher antidérapant en contreplaqué imperméable (9 mm d'épaisseur).</li>
  <li><strong>RIDELLES</strong> – Hauteur totale 70 cm (30 cm de ridelles de base et 40 cm de ridelles supplémentaires), fabriquées en tôle d'acier galvanisée avec protection anticorrosion et ondulée pour une plus grande stabilité.</li>
  <li>Parois latérales avec éléments de fixation permettant un tension correcte de la bâche. Hayon arrière qui s'ouvre et se démonte complètement.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Accessoires</h3>
<p class="mb-2">Vous pouvez également acquérir les accessoires suivants :</p>
<ul class="list-disc pl-5 space-y-1">
  <li>Filet de chargement</li>
  <li>Éléments de fixation</li>
  <li>Bavettes</li>
  <li>Béquilles</li>
  <li>Antivol</li>
  <li>Roue de secours avec kit de montage</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">200×106 mesh trailer with blue flat tarpaulin – Garden Trailer 200 KIPP</h2>
<p class="mb-3">Large tipping trailer with blue loading platform, mesh walls and jockey wheel, model Garden Trailer 200 KIPP. Thanks to its generous loading area of 200 x 106 cm, this trailer allows the transport of heavy loads or bulky items that normally do not fit in your car. The permissible total weight (GVWR) of <strong>750 kg</strong> allows any driver to safely attach the trailer to the hitch. The high tarpaulin with hoops and side extensions provides additional protection for your load. By using a modern AL-KO or KNOTT steering axle, we guarantee that even with an empty loading area, no pothole will cause problems. With our large tipping trailer, model Garden Trailer 200 KIPP, transport your goods comfortably and safely at all times.</p>

<h3 class="font-semibold mb-2 mt-5">Delivered directly to your home, including all necessary documents!</h3>
<p class="mb-3">Our large tipping trailer is delivered directly to your home by courier. You don't need to worry about assembly, as the trailer is delivered fully assembled and ready for immediate use. In addition, you will receive all necessary documents, including VAT invoice, registration certificate and type approval. UNITRAILER trailers are known for their exceptional durability and come with a <strong>2-year warranty</strong> valid at over 150 locations throughout Europe.</p>

<h3 class="font-semibold mb-2 mt-5">What are the advantages of our large tipping trailer with side extensions, high tarpaulin, hoops and jockey wheel?</h3>
<p class="mb-3">In addition to an exceptionally large loading space, we also offer side extensions including a high tarpaulin and tension hoops that protect your load from wind and weather. The included jockey wheel makes maneuvering the trailer easier when uncoupled. Thanks to the folding drawbar, you can tip the trailer and load and unload much faster. This feature is normally only found on higher-quality trailers that are often significantly more expensive.</p>
<p class="mb-3">The trailer is ideal for repairs, transporting furniture, wood, building materials, tools and everything you previously transported in your car. With the additional side extensions and the high tarpaulin with tension hoop, you achieve a loading height of up to <strong>70 cm</strong>.</p>
<p class="mb-3">Optionally, you can install side supports, floor lashing rings, a load net or purchase a spare wheel or wheel chocks. Adapting your trailer to your needs is child's play.</p>
<p class="mb-3">Are you wondering where to park your trailer when you disconnect it from the hitch? You don't need a garage! Thanks to the folding drawbar of our trailers, you can place it anywhere on the tailgate or lean it against your house without worrying about damage.</p>

<h3 class="font-semibold mb-2 mt-5">Technical specifications of our large garden trailer 200 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li><strong>CHASSIS</strong> – New single axle from the renowned brand AL-KO or KNOTT with independent torsion bar suspension, offering excellent driving characteristics.</li>
  <li>Folding V-shaped drawbar with coupling ring from WINTERHOFF with attachment indicator and steel breakaway cable.</li>
  <li>155/70 R13 all-season tires that absorb road irregularities and ensure a comfortable ride.</li>
  <li>Profiled floor made of hot-dip galvanized and bolted steel sheet – very durable</li>
  <li><strong>BOX</strong> – Non-slip floor made of waterproof glued plywood (9 mm thick).</li>
  <li><strong>SIDE BOARDS</strong> – Total height 70 cm (30 cm base side boards and 40 cm additional side boards), made of galvanized steel sheet with corrosion protection and corrugated for greater stability.</li>
  <li>Side walls with fastening elements that enable proper tensioning of the tarpaulin. Rear door that can be opened and completely removed.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Accessories</h3>
<p class="mb-2">You can also purchase the following accessories:</p>
<ul class="list-disc pl-5 space-y-1">
  <li>Tension net</li>
  <li>Fastening elements</li>
  <li>Mud flaps</li>
  <li>Corner legs</li>
  <li>Anti-theft device</li>
  <li>Spare wheel with mounting kit</li>
</ul>`,
    price_eur: 733.00,
    image_url: "/5-1.png",
    gallery: ["/5-1.png", "/5-2.png", "/5-3.png"],
    is_hot: true,
    stock: 99,
    created_at: "2026-04-01T10:00:00Z",
  },
  {
    id: "prod-6",
    slug: "3-achsiger-hydraulischer-kippanhaenger-400x200-unitrailer-tasker-400-3c-3500-kg",
    category_id: "cat-1",
    name_de: "3-ACHSIGER HYDRAULISCHER KIPPANHÄNGER 400×200 UNITRAILER TASKER 400/3C 3500 KG",
    name_fr: "REMORQUE BASCULANTE HYDRAULIQUE 3 ESSIEUX 400×200 UNITRAILER TASKER 400/3C 3500 KG",
    name_en: "3-AXLE HYDRAULIC TIPPER TRAILER 400×200 UNITRAILER TASKER 400/3C 3500 KG",
    description_de: `<h2 class="text-lg font-semibold mb-3">3-ACHSIGER HYDRAULISCHER KIPPANHÄNGER 400×200 UNITRAILER TASKER 400/3C 3500 KG</h2>
<p class="mb-3">Der Unirailer TASKER 400/3C Dreiachsanhänger ist ein wahres Juwel unter den Schwerlastanhängern.</p>
<p class="mb-3">Leicht, robust und multifunktional. Wir haben eine erstaunlich hohe Nutzlast von <strong>2520 kg</strong> erreicht. Gleichzeitig beträgt das Leergewicht dieses dreiachsigen Anhängers mit elektrischer Kippvorrichtung nur <strong>980 kg</strong>.</p>

<h3 class="font-semibold mb-2 mt-5">Unitrailer TASKER 400 / 3C Dreiachsanhänger – einfaches Entladen in wenigen Augenblicken</h3>
<p class="mb-3">Der Kipper verfügt über ein umfangreiches elektrisches Kippsystem, wodurch sich der Anhänger für vielfältige Aufgaben eignet. Dank der 4-Wege-Kippvorrichtung und der kippbaren Seitenwände haben Sie jederzeit einfachen Zugriff auf Ihre Ladung und können Waren durch einfaches Kippen mühelos entladen.</p>

<h3 class="font-semibold mb-2 mt-5">TASKER 400 / 3C 3-Achs-Anhänger – Vorteile und technische Daten</h3>
<ul class="list-disc pl-5 space-y-1">
  <li>Abmessungen des Laderaums: <strong>4050 x 1990</strong></li>
  <li>Reifengröße: 195/50 R13C</li>
  <li>Räder unterhalb der Ladefläche</li>
  <li>Geeignet für viele Berufe und Dienstleistungen</li>
  <li>30 cm hohe Seitenwände aus Aluminium</li>
  <li>Aluminiumboden</li>
  <li>Nettogewicht: <strong>980 kg</strong></li>
  <li>Maximale Anhängelast: <strong>2520 kg</strong></li>
  <li>Mit Federn an 3 Lenkachsen</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">REMORQUE BASCULANTE HYDRAULIQUE 3 ESSIEUX 400×200 UNITRAILER TASKER 400/3C 3500 KG</h2>
<p class="mb-3">La remorque trois essieux Unitrailer TASKER 400/3C est un véritable joyau parmi les remorques lourdes.</p>
<p class="mb-3">Légère, robuste et multifonctionnelle. Nous avons atteint une charge utile étonnamment élevée de <strong>2520 kg</strong>. Parallèlement, le poids à vide de cette remorque trois essieux avec dispositif de basculement électrique n'est que de <strong>980 kg</strong>.</p>

<h3 class="font-semibold mb-2 mt-5">Unitrailer TASKER 400 / 3C Remorque trois essieux – déchargement facile en quelques instants</h3>
<p class="mb-3">Le basculeur dispose d'un système de basculement électrique complet, ce qui rend la remorque adaptée à de multiples tâches. Grâce au dispositif de basculement 4 voies et aux ridelles basculantes, vous avez un accès facile à votre chargement à tout moment et pouvez décharger les marchandises sans effort en basculant simplement.</p>

<h3 class="font-semibold mb-2 mt-5">TASKER 400 / 3C Remorque 3 essieux – avantages et données techniques</h3>
<ul class="list-disc pl-5 space-y-1">
  <li>Dimensions du compartiment de charge : <strong>4050 x 1990</strong></li>
  <li>Taille des pneus : 195/50 R13C</li>
  <li>Roues sous le plancher de chargement</li>
  <li>Adapté à de nombreux métiers et services</li>
  <li>Ridelles en aluminium de 30 cm de hauteur</li>
  <li>Plancher en aluminium</li>
  <li>Poids net : <strong>980 kg</strong></li>
  <li>Charge remorquable maximale : <strong>2520 kg</strong></li>
  <li>Avec ressorts sur 3 essieux directionnels</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">3-AXLE HYDRAULIC TIPPER TRAILER 400×200 UNITRAILER TASKER 400/3C 3500 KG</h2>
<p class="mb-3">The Unitrailer TASKER 400/3C three-axle trailer is a true gem among heavy-duty trailers.</p>
<p class="mb-3">Light, robust and multifunctional. We have achieved an amazingly high payload of <strong>2520 kg</strong>. At the same time, the unladen weight of this three-axle trailer with electric tipping device is only <strong>980 kg</strong>.</p>

<h3 class="font-semibold mb-2 mt-5">Unitrailer TASKER 400 / 3C Three-axle trailer – easy unloading in moments</h3>
<p class="mb-3">The tipper features a comprehensive electric tipping system, making the trailer suitable for a wide variety of tasks. Thanks to the 4-way tipping device and the tilting side walls, you have easy access to your load at all times and can unload goods effortlessly by simply tipping.</p>

<h3 class="font-semibold mb-2 mt-5">TASKER 400 / 3C 3-axle trailer – advantages and technical data</h3>
<ul class="list-disc pl-5 space-y-1">
  <li>Cargo compartment dimensions: <strong>4050 x 1990</strong></li>
  <li>Tire size: 195/50 R13C</li>
  <li>Wheels below the loading floor</li>
  <li>Suitable for many professions and services</li>
  <li>30 cm high aluminum side walls</li>
  <li>Aluminum floor</li>
  <li>Net weight: <strong>980 kg</strong></li>
  <li>Maximum trailer load: <strong>2520 kg</strong></li>
  <li>With springs on 3 steering axles</li>
</ul>`,
    price_eur: 3830.00,
    image_url: "/6-1.jpg",
    gallery: ["/6-1.jpg", "/6-2.jpg", "/6-3.jpg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-04-15T10:00:00Z",
  },
  {
    id: "prod-7",
    slug: "3-hunde-anhanger-braun",
    category_id: "cat-1",
    name_de: "3-Hunde-Anhänger – braun",
    name_fr: "Remorque pour 3 chiens – marron",
    name_en: "3-dog trailer – brown",
    description_de: `<h2 class="text-lg font-semibold mb-3">3-Hunde-Anhänger – braun</h2>
<ul class="space-y-2">
  <li><strong>Zulässiges Höchstgewicht (PTAC)</strong> – 500 kg</li>
  <li><strong>Leergewicht</strong> – 225 kg</li>
  <li><strong>Nutzlast</strong> – 275 kg</li>
  <li><strong>Mindestleergewicht</strong> – 500 kg</li>
  <li><strong>Maximales Leergewicht</strong> – 500 kg</li>
  <li><strong>Achse</strong> – 1</li>
  <li><strong>Achswiderstand</strong> – 750 kg</li>
  <li><strong>Bremsen</strong> – ohne Bremsen</li>
  <li><strong>Felgengröße</strong> – 13″</li>
  <li><strong>Reserveradoption</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Jockeyrad</strong> – inklusive</li>
  <li><strong>LED-Leuchten</strong> – Nein</li>
</ul>
<p class="mt-3">Position der äußeren Räder<br>Kommerzielle und technische Dokumentation</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque pour 3 chiens – marron</h2>
<ul class="space-y-2">
  <li><strong>Poids total autorisé en charge (PTAC)</strong> – 500 kg</li>
  <li><strong>Poids à vide</strong> – 225 kg</li>
  <li><strong>Charge utile</strong> – 275 kg</li>
  <li><strong>Poids à vide minimum</strong> – 500 kg</li>
  <li><strong>Poids à vide maximum</strong> – 500 kg</li>
  <li><strong>Essieu</strong> – 1</li>
  <li><strong>Capacité d'essieu</strong> – 750 kg</li>
  <li><strong>Freins</strong> – sans freins</li>
  <li><strong>Taille des jantes</strong> – 13″</li>
  <li><strong>Option roue de secours</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Roue de jockey</strong> – incluse</li>
  <li><strong>Feux LED</strong> – Non</li>
</ul>
<p class="mt-3">Position des roues extérieures<br>Documentation commerciale et technique</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">3-dog trailer – brown</h2>
<ul class="space-y-2">
  <li><strong>Permissible maximum weight (GVWR)</strong> – 500 kg</li>
  <li><strong>Unladen weight</strong> – 225 kg</li>
  <li><strong>Payload</strong> – 275 kg</li>
  <li><strong>Minimum unladen weight</strong> – 500 kg</li>
  <li><strong>Maximum unladen weight</strong> – 500 kg</li>
  <li><strong>Axle</strong> – 1</li>
  <li><strong>Axle capacity</strong> – 750 kg</li>
  <li><strong>Brakes</strong> – without brakes</li>
  <li><strong>Rim size</strong> – 13″</li>
  <li><strong>Spare wheel option</strong> –</li>
  <li><strong>Drawbar</strong> – V-shaped</li>
  <li><strong>Jockey wheel</strong> – included</li>
  <li><strong>LED lights</strong> – No</li>
</ul>
<p class="mt-3">Position of outer wheels<br>Commercial and technical documentation</p>`,
    price_eur: 834.00,
    image_url: "/7-1.png",
    gallery: ["/7-1.png", "/7-2.jpg", "/7-3.jpg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-04-20T10:00:00Z",
  },
  {
    id: "prod-8",
    slug: "4-hunde-anhanger-braun",
    category_id: "cat-1",
    name_de: "4-Hunde-Anhänger – braun",
    name_fr: "Remorque pour 4 chiens – marron",
    name_en: "4-dog trailer – brown",
    description_de: `<h2 class="text-lg font-semibold mb-3">4-Hunde-Anhänger – braun</h2>
<ul class="space-y-2">
  <li><strong>Zulässiges Höchstgewicht (PTAC)</strong> – 500 kg</li>
  <li><strong>Leergewicht</strong> – 280 kg</li>
  <li><strong>Nutzlast</strong> – 220 kg</li>
  <li><strong>Mindestleergewicht</strong> – 500 kg</li>
  <li><strong>Maximales Leergewicht</strong> – 500 kg</li>
  <li><strong>Achse</strong> – 1</li>
  <li><strong>Achswiderstand</strong> – 750 kg</li>
  <li><strong>Bremsen</strong> – ohne Bremsen</li>
  <li><strong>Felgengröße</strong> – 13″</li>
  <li><strong>Reserveradoption</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Jockeyrad</strong> – inklusive</li>
  <li><strong>LED-Leuchten</strong> – Nein</li>
</ul>
<p class="mt-3">Position der äußeren Räder<br>Kommerzielle und technische Dokumentation</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque pour 4 chiens – marron</h2>
<ul class="space-y-2">
  <li><strong>Poids total autorisé en charge (PTAC)</strong> – 500 kg</li>
  <li><strong>Poids à vide</strong> – 280 kg</li>
  <li><strong>Charge utile</strong> – 220 kg</li>
  <li><strong>Poids à vide minimum</strong> – 500 kg</li>
  <li><strong>Poids à vide maximum</strong> – 500 kg</li>
  <li><strong>Essieu</strong> – 1</li>
  <li><strong>Capacité d'essieu</strong> – 750 kg</li>
  <li><strong>Freins</strong> – sans freins</li>
  <li><strong>Taille des jantes</strong> – 13″</li>
  <li><strong>Option roue de secours</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Roue de jockey</strong> – incluse</li>
  <li><strong>Feux LED</strong> – Non</li>
</ul>
<p class="mt-3">Position des roues extérieures<br>Documentation commerciale et technique</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">4-dog trailer – brown</h2>
<ul class="space-y-2">
  <li><strong>Permissible maximum weight (GVWR)</strong> – 500 kg</li>
  <li><strong>Unladen weight</strong> – 280 kg</li>
  <li><strong>Payload</strong> – 220 kg</li>
  <li><strong>Minimum unladen weight</strong> – 500 kg</li>
  <li><strong>Maximum unladen weight</strong> – 500 kg</li>
  <li><strong>Axle</strong> – 1</li>
  <li><strong>Axle capacity</strong> – 750 kg</li>
  <li><strong>Brakes</strong> – without brakes</li>
  <li><strong>Rim size</strong> – 13″</li>
  <li><strong>Spare wheel option</strong> –</li>
  <li><strong>Drawbar</strong> – V-shaped</li>
  <li><strong>Jockey wheel</strong> – included</li>
  <li><strong>LED lights</strong> – No</li>
</ul>
<p class="mt-3">Position of outer wheels<br>Commercial and technical documentation</p>`,
    price_eur: 1145.00,
    image_url: "/8-1.jpeg",
    gallery: ["/8-1.jpeg", "/8-2.png"],
    is_hot: true,
    stock: 98,
    created_at: "2026-04-25T10:00:00Z",
  },
  {
    id: "prod-9",
    slug: "4-hunde-anhanger-weiss",
    category_id: "cat-1",
    name_de: "4-Hunde-Anhänger – weiß",
    name_fr: "Remorque pour 4 chiens – blanche",
    name_en: "4-dog trailer – white",
    description_de: `<h2 class="text-lg font-semibold mb-3">4-Hunde-Anhänger – weiß</h2>
<ul class="space-y-2">
  <li><strong>Zulässiges Höchstgewicht (PTAC)</strong> – 500 kg</li>
  <li><strong>Leergewicht</strong> – 280 kg</li>
  <li><strong>Nutzlast</strong> – 220 kg</li>
  <li><strong>Mindestleergewicht</strong> – 500 kg</li>
  <li><strong>Maximales Leergewicht</strong> – 500 kg</li>
  <li><strong>Achse</strong> – 1</li>
  <li><strong>Achswiderstand</strong> – 750 kg</li>
  <li><strong>Bremsen</strong> – ohne Bremsen</li>
  <li><strong>Felgengröße</strong> – 13″</li>
  <li><strong>Reserveradoption</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Jockeyrad</strong> – inklusive</li>
  <li><strong>LED-Leuchten</strong> – Nein</li>
</ul>
<p class="mt-3">Position der äußeren Räder<br>Kommerzielle und technische Dokumentation</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque pour 4 chiens – blanche</h2>
<ul class="space-y-2">
  <li><strong>Poids total autorisé en charge (PTAC)</strong> – 500 kg</li>
  <li><strong>Poids à vide</strong> – 280 kg</li>
  <li><strong>Charge utile</strong> – 220 kg</li>
  <li><strong>Poids à vide minimum</strong> – 500 kg</li>
  <li><strong>Poids à vide maximum</strong> – 500 kg</li>
  <li><strong>Essieu</strong> – 1</li>
  <li><strong>Capacité d'essieu</strong> – 750 kg</li>
  <li><strong>Freins</strong> – sans freins</li>
  <li><strong>Taille des jantes</strong> – 13″</li>
  <li><strong>Option roue de secours</strong> –</li>
  <li><strong>Timon</strong> – En V.</li>
  <li><strong>Roue de jockey</strong> – incluse</li>
  <li><strong>Feux LED</strong> – Non</li>
</ul>
<p class="mt-3">Position des roues extérieures<br>Documentation commerciale et technique</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">4-dog trailer – white</h2>
<ul class="space-y-2">
  <li><strong>Permissible maximum weight (GVWR)</strong> – 500 kg</li>
  <li><strong>Unladen weight</strong> – 280 kg</li>
  <li><strong>Payload</strong> – 220 kg</li>
  <li><strong>Minimum unladen weight</strong> – 500 kg</li>
  <li><strong>Maximum unladen weight</strong> – 500 kg</li>
  <li><strong>Axle</strong> – 1</li>
  <li><strong>Axle capacity</strong> – 750 kg</li>
  <li><strong>Brakes</strong> – without brakes</li>
  <li><strong>Rim size</strong> – 13″</li>
  <li><strong>Spare wheel option</strong> –</li>
  <li><strong>Drawbar</strong> – V-shaped</li>
  <li><strong>Jockey wheel</strong> – included</li>
  <li><strong>LED lights</strong> – No</li>
</ul>
<p class="mt-3">Position of outer wheels<br>Commercial and technical documentation</p>`,
    price_eur: 1330.00,
    image_url: "/9-1.jpeg",
    gallery: ["/9-1.jpeg", "/9-2.jpeg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-04-30T10:00:00Z",
  },
  {
    id: "prod-10",
    slug: "750-kg-anhanger-200x125-mit-domdeckel-garden-trailer-201-kipp",
    category_id: "cat-1",
    name_de: "750 kg Anhänger 200 x 125 mit Domdeckel und Überrollbügel Garden Trailer 201 KIPP",
    name_fr: "Remorque 750 kg 200 x 125 avec couvercle en dôme et arceau de sécurité Garden Trailer 201 KIPP",
    name_en: "750 kg trailer 200 x 125 with dome cover and roll bar Garden Trailer 201 KIPP",
    description_de: `<h2 class="text-lg font-semibold mb-3">750 kg Kippanhänger mit Kuppelabdeckung, Gartenanhänger 201 KIPP</h2>
<p class="mb-3">Der Gartenanhänger 201 KIPP mit einem zulässigen Gesamtgewicht von 750 kg (maximal 750 kg) ermöglicht in der Ausführung mit einer 80 cm Kuppelplane den Transport von bis zu 626 kg Ladung (bei einem zulässigen Gesamtgewicht von 750 kg) auf dem 200×125 cm großen Boden und mit den 30 cm hohen Seitenwänden.</p>

<h3 class="font-semibold mb-2 mt-5">Lieferung innerhalb von 24 Stunden zu Ihnen nach Hause inklusive aller Dokumente für die Anhängerzulassung</h3>
<p class="mb-3">Der 750 kg leichte Anhänger wird Ihnen bereits montiert auf einer Palette geliefert. Sie müssen lediglich die Rückwand von der Palette abschrauben und Rahmen und Plane anbringen. Alle notwendigen Dokumente für die Zulassung des Anhängers erhalten Sie selbstverständlich.</p>
<p class="mb-3"><strong>Achtung!</strong> Das zulässige Gesamtgewicht (GZG) beträgt in Frankreich standardmäßig 500 kg (in Belgien 750 kg). Um ein GZG von 750 kg zu erhalten, geben Sie dies bitte bei der Bestellung an. Ein leichter Anhänger mit einem zulässigen Gesamtgewicht von 500 kg muss in Frankreich nicht zugelassen werden. Ab 750 kg ist eine Zulassung erforderlich – wir stellen Ihnen alle notwendigen Dokumente zur Verfügung! Vergessen Sie nicht, die obligatorische Anhängerversicherung für zugelassene Anhänger abzuschließen.</p>
<p class="mb-3">Unsere Anhänger werden aus Teilen führender Hersteller gefertigt und sind daher besonders langlebig. Der 750-kg-Anhänger ist straßenzugelassen und wird mit <strong>2 Jahren Garantie</strong> geliefert – alles für Ihre Sicherheit!</p>

<h3 class="font-semibold mb-2 mt-5">Vorteile des UNITRAILER Gartenanhängers 201 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Schneller Versand und Lieferung zu Ihnen nach Hause oder ins Büro</li>
  <li>Dank zusätzlicher Querträger langlebiger als herkömmliche Anhänger auf dem Markt</li>
  <li>Alle Dokumente, die zur Zulassung des Anhängers benötigt werden</li>
  <li>Breites Sortiment an Zubehör, das speziell für unsere Anhänger entwickelt wurde</li>
  <li>2 Jahre Herstellergarantie</li>
</ul>
<p class="mb-3">Wir sind Experten für leichte Anhänger – kontaktieren Sie uns gerne für eine Beratung zu Produkt, Zulassung oder Nutzung unseres Anhängers.</p>

<h3 class="font-semibold mb-2 mt-5">Leichter und dennoch leistungsstarker Anhänger</h3>
<p class="mb-3">Der Transport von Möbeln, Haushaltsgeräten, Garten- oder Heimwerkerbedarf und Paletten ist dank des KIPP Gartenanhängers 201 mit seiner Kuppelabdeckung kein Problem mehr. Sie können verschiedenste Ladungen transportieren, ohne sich Gedanken über Wetterbedingungen wie Regen, Schnee oder pralle Sonne machen zu müssen.</p>
<p class="mb-3">Der größte Laderaum in unserem Sortiment ermöglicht Ihnen den Transport von noch mehr Gegenständen – auch von größeren. Die leicht abnehmbare und klappbare Heckklappe erleichtert das Be- und Entladen erheblich und ermöglicht zudem den Transport von Gegenständen mit einer Länge von über 2 Metern.</p>

<h3 class="font-semibold mb-2 mt-5">Was macht den KIPP Gartenanhänger 201 so besonders?</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Breiterer Boden als bei anderen leichten Anhängern – 125 cm</li>
  <li>Die Kippfunktion des Anhängers sorgt für einfacheres Be- und Entladen</li>
  <li>Vertikale Lagerung bei eingeklappter Deichsel – spart Platz in Ihrer Garage oder neben Ihrem Haus</li>
  <li>Zusätzliche Querträger, die den Anhänger haltbarer machen</li>
  <li>Die seitlich am Laderaum positionierten Räder führen zu einem niedrigeren Schwerpunkt, verbessertem Fahrverhalten und besserer Straßenlage</li>
  <li>Kunststoff-Kotflügel – langlebig, rostfrei und modernes Aussehen</li>
  <li>Schnelles und einfaches Abnehmen der Heckklappe</li>
  <li>Die Rückleuchten sind in der Heckklappe versteckt, um sie vor Beschädigungen zu schützen</li>
  <li>Breite Palette an Zubehör und Ersatzteilen sofort verfügbar</li>
  <li>Lieferung direkt an die angegebene Adresse – Versand innerhalb von 24 Stunden</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten des KIPP 750 kg Gartenanhängers 201</h3>
<ul class="list-disc pl-5 space-y-1">
  <li><strong>FAHRGESTELL</strong> – Achse der neuen Generation, hergestellt von AL-KO oder KNOTT, mit Gummi-Torsionsstäben</li>
  <li>Klappbare V-förmige Zugstange mit Kupplungskasten und Kupplungsanzeige</li>
  <li>155/70 13-Zoll-Ganzjahresreifen absorbieren Stöße und sorgen für eine komfortable Fahrt</li>
  <li>Anhängerrahmen aus verzinktem Stahlprofil, verschraubt</li>
  <li><strong>KAROSSERIE</strong> – hochwertiger, wasserfester und rutschfester Sperrholzboden, 9 mm dick</li>
  <li><strong>SIDEBOARDS</strong> – Höhe 30 cm, aus robustem, korrosionsbeständigem, verzinktem Stahlblech</li>
  <li>Profiliertes Blech für verbesserte Steifigkeit</li>
  <li>Ankerrollen an den Seitenwänden für richtiges Spannen der Plane</li>
  <li>Heckklappe kann geöffnet oder komplett abgenommen werden</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque basculante 750 kg avec couvercle en dôme, remorque de jardin 201 KIPP</h2>
<p class="mb-3">La remorque de jardin 201 KIPP avec un poids total autorisé en charge de 750 kg permet, dans sa version avec bâche dôme de 80 cm, de transporter jusqu'à 626 kg de charge sur un plancher de 200×125 cm avec des ridelles de 30 cm de hauteur.</p>

<h3 class="font-semibold mb-2 mt-5">Livraison sous 24 heures à domicile avec tous les documents d'immatriculation</h3>
<p class="mb-3">La remorque de 750 kg vous est livrée déjà montée sur une palette. Il vous suffit de dévisser le panneau arrière de la palette et d'installer le cadre et la bâche. Tous les documents nécessaires à l'immatriculation vous sont fournis.</p>
<p class="mb-3"><strong>Attention !</strong> Le PTAC standard en France est de 500 kg (750 kg en Belgique). Pour obtenir un PTAC de 750 kg, veuillez l'indiquer à la commande. Une remorque légère de 500 kg n'a pas besoin d'être immatriculée en France. À partir de 750 kg, l'immatriculation est obligatoire – nous vous fournissons tous les documents nécessaires ! N'oubliez pas de souscrire une assurance remorque obligatoire.</p>
<p class="mb-3">Nos remorques sont fabriquées à partir de pièces de grands fabricants et sont particulièrement durables. La remorque de 750 kg est homologuée pour la route et livrée avec <strong>2 ans de garantie</strong>.</p>

<h3 class="font-semibold mb-2 mt-5">Avantages de la remorque de jardin UNITRAILER 201 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Expédition rapide et livraison à domicile ou au bureau</li>
  <li>Plus durable grâce aux traverses supplémentaires</li>
  <li>Tous les documents nécessaires à l'immatriculation</li>
  <li>Large gamme d'accessoires spécialement conçus pour nos remorques</li>
  <li>2 ans de garantie constructeur</li>
</ul>
<p class="mb-3">Nous sommes des experts en remorques légères – contactez-nous pour des conseils sur le produit, l'immatriculation ou l'utilisation.</p>

<h3 class="font-semibold mb-2 mt-5">Une remorque légère mais puissante</h3>
<p class="mb-3">Le transport de meubles, d'appareils électroménagers, de matériel de jardin ou de bricolage et de palettes n'est plus un problème grâce à la remorque basculante 201 KIPP avec son couvercle en dôme. Transportez toutes sortes de charges sans vous soucier de la météo.</p>
<p class="mb-3">Le plus grand espace de chargement de notre gamme vous permet de transporter encore plus d'objets. Le hayon facilement amovible et rabattable facilite le chargement et le déchargement et permet le transport d'objets de plus de 2 mètres.</p>

<h3 class="font-semibold mb-2 mt-5">Qu'est-ce qui rend la remorque 201 KIPP si spéciale ?</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Plancher plus large que les autres remorques légères – 125 cm</li>
  <li>Fonction basculante pour un chargement/déchargement facilité</li>
  <li>Stockage vertical avec timon replié – gagne de la place</li>
  <li>Traverses supplémentaires pour une durabilité accrue</li>
  <li>Roues positionnées latéralement pour un centre de gravité plus bas</li>
  <li>Ailes en plastique – durables, sans rouille, aspect moderne</li>
  <li>Hayon facile à enlever</li>
  <li>Feux arrière cachés dans le hayon pour les protéger</li>
  <li>Large gamme d'accessoires et pièces de rechange disponibles</li>
  <li>Livraison directe à l'adresse indiquée</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Caractéristiques techniques de la remorque de jardin 201 KIPP 750 kg</h3>
<ul class="list-disc pl-5 space-y-1">
  <li><strong>CHÂSSIS</strong> – Essieu de nouvelle génération AL-KO ou KNOTT avec barres de torsion en caoutchouc</li>
  <li>Timon pliable en V avec indicateur d'attelage</li>
  <li>Pneus toutes saisons 155/70 13 pouces</li>
  <li>Châssis en profilé d'acier galvanisé, boulonné</li>
  <li><strong>CARROSSERIE</strong> – Plancher en contreplaqué imperméable et antidérapant de 9 mm</li>
  <li><strong>RIDELLES</strong> – Hauteur 30 cm, en tôle d'acier galvanisé résistante à la corrosion</li>
  <li>Tôle profilée pour une rigidité améliorée</li>
  <li>Rouleaux d'ancrage pour tendre correctement la bâche</li>
  <li>Hayon ouvrable ou entièrement amovible</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">750 kg dump trailer with dome cover, Garden Trailer 201 KIPP</h2>
<p class="mb-3">The Garden Trailer 201 KIPP with a permissible total weight of 750 kg allows, in the version with an 80 cm dome tarpaulin, transport of up to 626 kg of load on a 200×125 cm floor with 30 cm high side walls.</p>

<h3 class="font-semibold mb-2 mt-5">Delivery within 24 hours to your home including all registration documents</h3>
<p class="mb-3">The 750 kg trailer is delivered pre-assembled on a pallet. You simply need to unscrew the rear panel from the pallet and attach the frame and tarpaulin. All necessary registration documents are provided.</p>
<p class="mb-3"><strong>Attention!</strong> The standard GVWR in France is 500 kg (750 kg in Belgium). To obtain a GVWR of 750 kg, please indicate this when ordering. A light trailer with a GVWR of 500 kg does not need to be registered in France. From 750 kg, registration is required – we provide all the necessary documents! Don't forget to take out the compulsory trailer insurance for registered trailers.</p>
<p class="mb-3">Our trailers are made from parts from leading manufacturers and are particularly durable. The 750 kg trailer is road-approved and comes with a <strong>2-year warranty</strong>.</p>

<h3 class="font-semibold mb-2 mt-5">Advantages of the UNITRAILER Garden Trailer 201 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Fast shipping and delivery to your home or office</li>
  <li>More durable thanks to additional cross members</li>
  <li>All documents required for trailer registration</li>
  <li>Wide range of accessories designed specifically for our trailers</li>
  <li>2-year manufacturer's warranty</li>
</ul>
<p class="mb-3">We are light trailer experts – contact us for advice on the product, registration or use of our trailer.</p>

<h3 class="font-semibold mb-2 mt-5">Light yet powerful trailer</h3>
<p class="mb-3">Transporting furniture, household appliances, garden or DIY supplies and pallets is no longer a problem thanks to the KIPP Garden Trailer 201 with its dome cover. Carry all kinds of loads without worrying about weather conditions.</p>
<p class="mb-3">The largest load space in our range allows you to transport even more items. The easily removable and folding tailgate makes loading and unloading much easier and also allows transport of items over 2 meters long.</p>

<h3 class="font-semibold mb-2 mt-5">What makes the KIPP Garden Trailer 201 so special?</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Wider floor than other light trailers – 125 cm</li>
  <li>Tipping function for easier loading and unloading</li>
  <li>Vertical storage with folded drawbar – saves space</li>
  <li>Additional cross members for increased durability</li>
  <li>Side-positioned wheels for lower center of gravity</li>
  <li>Plastic mudguards – durable, rust-free, modern look</li>
  <li>Quick and easy tailgate removal</li>
  <li>Rear lights hidden in the tailgate for protection</li>
  <li>Wide range of accessories and spare parts immediately available</li>
  <li>Direct delivery to your address</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical specifications of the KIPP 750 kg Garden Trailer 201</h3>
<ul class="list-disc pl-5 space-y-1">
  <li><strong>CHASSIS</strong> – New generation axle from AL-KO or KNOTT with rubber torsion bars</li>
  <li>Foldable V-shaped drawbar with coupling indicator</li>
  <li>155/70 13-inch all-season tires absorb shocks</li>
  <li>Galvanized steel profile frame, bolted</li>
  <li><strong>BODY</strong> – High-quality waterproof non-slip plywood floor, 9 mm thick</li>
  <li><strong>SIDE BOARDS</strong> – Height 30 cm, made of robust corrosion-resistant galvanized steel sheet</li>
  <li>Profiled sheet for improved rigidity</li>
  <li>Anchor rollers for proper tarpaulin tensioning</li>
  <li>Tailgate can be opened or completely removed</li>
</ul>`,
    price_eur: 649.00,
    image_url: "/10-1.png",
    gallery: ["/10-1.png", "/10-2.png", "/10-3.png", "/10-4.png"],
    is_hot: true,
    stock: 99,
    created_at: "2026-05-05T10:00:00Z",
  },
  {
    id: "prod-11",
    slug: "750-kg-kippanhaenger-mit-domdeckel-garden-trailer-201-kipp",
    category_id: "cat-1",
    name_de: "750 kg Kippanhänger mit Domdeckel Garden Trailer 201 KIPP",
    name_fr: "Remorque basculante 750 kg avec couvercle en dôme Garden Trailer 201 KIPP",
    name_en: "750 kg dump trailer with dome cover Garden Trailer 201 KIPP",
    description_de: `<h2 class="text-lg font-semibold mb-3">750 kg Kippanhänger mit Kuppelabdeckung, Gartenanhänger 201 KIPP</h2>
<p class="mb-3">Der Gartenanhänger 201 KIPP mit einem zulässigen Gesamtgewicht von 750 kg (maximal 750 kg) ermöglicht in der Ausführung mit einer 80 cm Kuppelplane den Transport von bis zu 626 kg Ladung (bei einem zulässigen Gesamtgewicht von 750 kg) auf dem 200×125 cm großen Boden und mit den 30 cm hohen Seitenwänden.</p>

<h3 class="font-semibold mb-2 mt-5">Lieferung innerhalb von 24 Stunden zu Ihnen nach Hause inklusive aller Dokumente für die Anhängerzulassung</h3>
<p class="mb-3">Der 750 kg leichte Anhänger wird Ihnen bereits montiert auf einer Palette geliefert. Sie müssen lediglich die Rückwand von der Palette abschrauben und Rahmen und Plane anbringen. Alle notwendigen Dokumente für die Zulassung des Anhängers erhalten Sie selbstverständlich.</p>
<p class="mb-3"><strong>Achtung!</strong> Das zulässige Gesamtgewicht (GZG) beträgt in Frankreich standardmäßig 500 kg (in Belgien 750 kg). Um ein GZG von 750 kg zu erhalten, geben Sie dies bitte bei der Bestellung an. Ein leichter Anhänger mit einem zulässigen Gesamtgewicht von 500 kg muss in Frankreich nicht zugelassen werden. Ab 750 kg ist eine Zulassung erforderlich – wir stellen Ihnen alle notwendigen Dokumente zur Verfügung! Vergessen Sie nicht, die obligatorische Anhängerversicherung für zugelassene Anhänger abzuschließen.</p>
<p class="mb-3">Unsere Anhänger werden aus Teilen führender Hersteller gefertigt und sind daher besonders langlebig. Der 750-kg-Anhänger ist straßenzugelassen und wird mit <strong>2 Jahren Garantie</strong> geliefert – alles für Ihre Sicherheit!</p>

<h3 class="font-semibold mb-2 mt-5">Vorteile des UNITRAILER Gartenanhängers 201 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Schneller Versand und Lieferung zu Ihnen nach Hause oder ins Büro</li>
  <li>Dank zusätzlicher Querträger langlebiger als herkömmliche Anhänger auf dem Markt</li>
  <li>Alle Dokumente, die zur Zulassung des Anhängers benötigt werden</li>
  <li>Breites Sortiment an Zubehör, das speziell für unsere Anhänger entwickelt wurde</li>
  <li>2 Jahre Herstellergarantie</li>
</ul>
<p class="mb-3">Wir sind Experten für leichte Anhänger – kontaktieren Sie uns gerne für eine Beratung zu Produkt, Zulassung oder Nutzung unseres Anhängers.</p>

<h3 class="font-semibold mb-2 mt-5">Leichter und dennoch leistungsstarker Anhänger</h3>
<p class="mb-3">Der Transport von Möbeln, Haushaltsgeräten, Garten- oder Heimwerkerbedarf und Paletten ist dank des KIPP Gartenanhängers 201 mit seiner Kuppelabdeckung kein Problem mehr. Sie können verschiedenste Ladungen transportieren, ohne sich Gedanken über Wetterbedingungen wie Regen, Schnee oder pralle Sonne machen zu müssen.</p>
<p class="mb-3">Der größte Laderaum in unserem Sortiment ermöglicht Ihnen den Transport von noch mehr Gegenständen – auch von größeren. Die leicht abnehmbare und klappbare Heckklappe erleichtert das Be- und Entladen erheblich und ermöglicht zudem den Transport von Gegenständen mit einer Länge von über 2 Metern.</p>

<h3 class="font-semibold mb-2 mt-5">Was macht den KIPP Gartenanhänger 201 so besonders?</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Breiterer Boden als bei anderen leichten Anhängern – 125 cm</li>
  <li>Die Kippfunktion des Anhängers sorgt für einfacheres Be- und Entladen</li>
  <li>Vertikale Lagerung bei eingeklappter Deichsel – spart Platz in Ihrer Garage oder neben Ihrem Haus</li>
  <li>Zusätzliche Querträger, die den Anhänger haltbarer machen</li>
  <li>Die seitlich am Laderaum positionierten Räder führen zu einem niedrigeren Schwerpunkt, verbessertem Fahrverhalten und besserer Straßenlage</li>
  <li>Kunststoff-Kotflügel – langlebig, rostfrei und modernes Aussehen</li>
  <li>Schnelles und einfaches Abnehmen der Heckklappe</li>
  <li>Die Rückleuchten sind in der Heckklappe versteckt, um sie vor Beschädigungen zu schützen</li>
  <li>Breite Palette an Zubehör und Ersatzteilen sofort verfügbar</li>
  <li>Lieferung direkt an die angegebene Adresse – Versand innerhalb von 24 Stunden</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten des KIPP 750 kg Gartenanhängers 201</h3>
<ul class="list-disc pl-5 space-y-1">
  <li><strong>FAHRGESTELL</strong> – Achse der neuen Generation, hergestellt von AL-KO oder KNOTT, mit Gummi-Torsionsstäben</li>
  <li>Klappbare V-förmige Zugstange mit Kupplungskasten und Kupplungsanzeige</li>
  <li>155/70 13-Zoll-Ganzjahresreifen absorbieren Stöße und sorgen für eine komfortable Fahrt</li>
  <li>Anhängerrahmen aus verzinktem Stahlprofil, verschraubt</li>
  <li><strong>KAROSSERIE</strong> – hochwertiger, wasserfester und rutschfester Sperrholzboden, 9 mm dick</li>
  <li><strong>SIDEBOARDS</strong> – Höhe 30 cm, aus robustem, korrosionsbeständigem, verzinktem Stahlblech</li>
  <li>Profiliertes Blech für verbesserte Steifigkeit</li>
  <li>Ankerrollen an den Seitenwänden für richtiges Spannen der Plane</li>
  <li>Heckklappe kann geöffnet oder komplett abgenommen werden</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Remorque basculante 750 kg avec couvercle en dôme Garden Trailer 201 KIPP</h2>
<p class="mb-3">La remorque de jardin 201 KIPP avec un poids total autorisé en charge de 750 kg permet, dans sa version avec bâche dôme de 80 cm, de transporter jusqu'à 626 kg de charge sur un plancher de 200×125 cm avec des ridelles de 30 cm de hauteur.</p>

<h3 class="font-semibold mb-2 mt-5">Livraison sous 24 heures à domicile avec tous les documents d'immatriculation</h3>
<p class="mb-3">La remorque de 750 kg vous est livrée déjà montée sur une palette. Il vous suffit de dévisser le panneau arrière de la palette et d'installer le cadre et la bâche. Tous les documents nécessaires à l'immatriculation vous sont fournis.</p>
<p class="mb-3"><strong>Attention !</strong> Le PTAC standard en France est de 500 kg (750 kg en Belgique). Pour obtenir un PTAC de 750 kg, veuillez l'indiquer à la commande. Une remorque légère de 500 kg n'a pas besoin d'être immatriculée en France. À partir de 750 kg, l'immatriculation est obligatoire – nous vous fournissons tous les documents nécessaires ! N'oubliez pas de souscrire une assurance remorque obligatoire.</p>
<p class="mb-3">Nos remorques sont fabriquées à partir de pièces de grands fabricants et sont particulièrement durables. La remorque de 750 kg est homologuée pour la route et livrée avec <strong>2 ans de garantie</strong>.</p>

<h3 class="font-semibold mb-2 mt-5">Avantages de la remorque de jardin UNITRAILER 201 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Expédition rapide et livraison à domicile ou au bureau</li>
  <li>Plus durable grâce aux traverses supplémentaires</li>
  <li>Tous les documents nécessaires à l'immatriculation</li>
  <li>Large gamme d'accessoires spécialement conçus pour nos remorques</li>
  <li>2 ans de garantie constructeur</li>
</ul>
<p class="mb-3">Nous sommes des experts en remorques légères – contactez-nous pour des conseils sur le produit, l'immatriculation ou l'utilisation.</p>

<h3 class="font-semibold mb-2 mt-5">Une remorque légère mais puissante</h3>
<p class="mb-3">Le transport de meubles, d'appareils électroménagers, de matériel de jardin ou de bricolage et de palettes n'est plus un problème grâce à la remorque basculante 201 KIPP avec son couvercle en dôme. Transportez toutes sortes de charges sans vous soucier de la météo.</p>
<p class="mb-3">Le plus grand espace de chargement de notre gamme vous permet de transporter encore plus d'objets. Le hayon facilement amovible et rabattable facilite le chargement et le déchargement et permet le transport d'objets de plus de 2 mètres.</p>

<h3 class="font-semibold mb-2 mt-5">Qu'est-ce qui rend la remorque 201 KIPP si spéciale ?</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Plancher plus large que les autres remorques légères – 125 cm</li>
  <li>Fonction basculante pour un chargement/déchargement facilité</li>
  <li>Stockage vertical avec timon replié – gagne de la place</li>
  <li>Traverses supplémentaires pour une durabilité accrue</li>
  <li>Roues positionnées latéralement pour un centre de gravité plus bas</li>
  <li>Ailes en plastique – durables, sans rouille, aspect moderne</li>
  <li>Hayon facile à enlever</li>
  <li>Feux arrière cachés dans le hayon pour les protéger</li>
  <li>Large gamme d'accessoires et pièces de rechange disponibles</li>
  <li>Livraison directe à l'adresse indiquée</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Caractéristiques techniques de la remorque de jardin 201 KIPP 750 kg</h3>
<ul class="list-disc pl-5 space-y-1">
  <li><strong>CHÂSSIS</strong> – Essieu de nouvelle génération AL-KO ou KNOTT avec barres de torsion en caoutchouc</li>
  <li>Timon pliable en V avec indicateur d'attelage</li>
  <li>Pneus toutes saisons 155/70 13 pouces</li>
  <li>Châssis en profilé d'acier galvanisé, boulonné</li>
  <li><strong>CARROSSERIE</strong> – Plancher en contreplaqué imperméable et antidérapant de 9 mm</li>
  <li><strong>RIDELLES</strong> – Hauteur 30 cm, en tôle d'acier galvanisé résistante à la corrosion</li>
  <li>Tôle profilée pour une rigidité améliorée</li>
  <li>Rouleaux d'ancrage pour tendre correctement la bâche</li>
  <li>Hayon ouvrable ou entièrement amovible</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">750 kg dump trailer with dome cover Garden Trailer 201 KIPP</h2>
<p class="mb-3">The Garden Trailer 201 KIPP with a permissible total weight of 750 kg allows, in the version with an 80 cm dome tarpaulin, transport of up to 626 kg of load on a 200×125 cm floor with 30 cm high side walls.</p>

<h3 class="font-semibold mb-2 mt-5">Delivery within 24 hours to your home including all registration documents</h3>
<p class="mb-3">The 750 kg trailer is delivered pre-assembled on a pallet. You simply need to unscrew the rear panel from the pallet and attach the frame and tarpaulin. All necessary registration documents are provided.</p>
<p class="mb-3"><strong>Attention!</strong> The standard GVWR in France is 500 kg (750 kg in Belgium). To obtain a GVWR of 750 kg, please indicate this when ordering. A light trailer with a GVWR of 500 kg does not need to be registered in France. From 750 kg, registration is required – we provide all the necessary documents! Don't forget to take out the compulsory trailer insurance for registered trailers.</p>
<p class="mb-3">Our trailers are made from parts from leading manufacturers and are particularly durable. The 750 kg trailer is road-approved and comes with a <strong>2-year warranty</strong>.</p>

<h3 class="font-semibold mb-2 mt-5">Advantages of the UNITRAILER Garden Trailer 201 KIPP</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Fast shipping and delivery to your home or office</li>
  <li>More durable thanks to additional cross members</li>
  <li>All documents required for trailer registration</li>
  <li>Wide range of accessories designed specifically for our trailers</li>
  <li>2-year manufacturer's warranty</li>
</ul>
<p class="mb-3">We are light trailer experts – contact us for advice on the product, registration or use of our trailer.</p>

<h3 class="font-semibold mb-2 mt-5">Light yet powerful trailer</h3>
<p class="mb-3">Transporting furniture, household appliances, garden or DIY supplies and pallets is no longer a problem thanks to the KIPP Garden Trailer 201 with its dome cover. Carry all kinds of loads without worrying about weather conditions.</p>
<p class="mb-3">The largest load space in our range allows you to transport even more items. The easily removable and folding tailgate makes loading and unloading much easier and also allows transport of items over 2 meters long.</p>

<h3 class="font-semibold mb-2 mt-5">What makes the KIPP Garden Trailer 201 so special?</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
  <li>Wider floor than other light trailers – 125 cm</li>
  <li>Tipping function for easier loading and unloading</li>
  <li>Vertical storage with folded drawbar – saves space</li>
  <li>Additional cross members for increased durability</li>
  <li>Side-positioned wheels for lower center of gravity</li>
  <li>Plastic mudguards – durable, rust-free, modern look</li>
  <li>Quick and easy tailgate removal</li>
  <li>Rear lights hidden in the tailgate for protection</li>
  <li>Wide range of accessories and spare parts immediately available</li>
  <li>Direct delivery to your address</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical specifications of the KIPP 750 kg Garden Trailer 201</h3>
<ul class="list-disc pl-5 space-y-1">
  <li><strong>CHASSIS</strong> – New generation axle from AL-KO or KNOTT with rubber torsion bars</li>
  <li>Foldable V-shaped drawbar with coupling indicator</li>
  <li>155/70 13-inch all-season tires absorb shocks</li>
  <li>Galvanized steel profile frame, bolted</li>
  <li><strong>BODY</strong> – High-quality waterproof non-slip plywood floor, 9 mm thick</li>
  <li><strong>SIDE BOARDS</strong> – Height 30 cm, made of robust corrosion-resistant galvanized steel sheet</li>
  <li>Profiled sheet for improved rigidity</li>
  <li>Anchor rollers for proper tarpaulin tensioning</li>
  <li>Tailgate can be opened or completely removed</li>
</ul>`,
    price_eur: 776.00,
    image_url: "/11-1.png",
    gallery: ["/11-1.png", "/11-2.png", "/11-3.png", "/11-4.png"],
    is_hot: true,
    stock: 99,
    created_at: "2026-05-10T10:00:00Z",
  },
  {
    id: "prod-12",
    slug: "alpina-bt-66-q-rasentraktor",
    category_id: "cat-2",
    name_de: "Alpina BT 66 Q Rasentraktor",
    name_fr: "Tracteur tondeuse Alpina BT 66 Q",
    name_en: "Alpina BT 66 Q Lawn Tractor",
    description_de: `<h2 class="text-lg font-semibold mb-3">Alpina BT 66 Q Rasentraktor</h2>
<p class="mb-3">Der Aufsitzmäher ALPINA BT 66 Q ist kompakt und wendig dank seines kleinen Wendekreises. So kann er problemlos nahe an Steinen und Kanten mähen. Sein ALPINA 5750 Motor leistet beeindruckende 3,6 kW (4,9 PS) bei 2.450 U/min und einem Hubraum von 224 cm³. Das Mähsystem des BT 66 Q erfüllt alle Anforderungen. Ob Sie das Schnittgut durch den Heckauswurf im 150-Liter-Fangkorb sammeln, seitlich auswerfen oder mit dem Mulchkit auf dem Rasen häckseln möchten – der BT 66 Q bietet vielseitige Möglichkeiten. Er bietet eine Schnittbreite von 66 cm und fünf einstellbare Schnitthöhen von 30 bis 64 mm. Mit diesen Eigenschaften ist der BT 66 Q ideal für Gärten bis 1.200 m². Zur einfachen Reinigung des Mähdecks ist ein Wasseranschluss integriert, an den ein Gartenschlauch angeschlossen werden kann. Der Aufsitzmäher ALPINA BT 66 Q wird mit einem Batterieladegerät und einem Mulchkeil geliefert.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Mähsystem</strong> – Sammeln, Seitenauswurf</li>
  <li><strong>Radius der ungemähten Fläche</strong> – 77,5 cm</li>
  <li><strong>Schnittbreite</strong> – 66 cm</li>
  <li><strong>Rückwärtsmähen</strong> – Ja</li>
  <li><strong>Schnitthöhenverstellung</strong> – Manuell mit Hebel</li>
  <li><strong>Schnitthöhenpositionen</strong> – 5 Positionen</li>
  <li><strong>Schnitthöhe</strong> – 30–64 mm</li>
  <li><strong>Messeranzahl</strong> – 1</li>
  <li><strong>Zusätzliche Mähfunktion</strong> – Mulchen</li>
  <li><strong>Messerhalterung</strong> – Manuell</li>
  <li><strong>Fahrtechnologie</strong> – 4 vorwärts + 1 rückwärts</li>
  <li><strong>Getriebeart</strong> – Hebelbetätigt</li>
  <li><strong>Vorwärtsgeschwindigkeit</strong> – Mechanisch</li>
  <li><strong>Batterieladegerät</strong> – Enthalten</li>
  <li><strong>Anhängekupplung</strong> – Nein</li>
  <li><strong>Gewicht inkl. Verpackung</strong> – 147 kg</li>
  <li><strong>Länge</strong> – 1830 mm</li>
  <li><strong>Leistung</strong> – 3,6 kW</li>
  <li><strong>Stromquelle</strong> – Benzin</li>
  <li><strong>Batteriekapazität</strong> – 9 Ah</li>
  <li><strong>Motormarke</strong> – ALPINA</li>
  <li><strong>Motor modell</strong> – ST 250 ES Angetrieben von STIGA</li>
  <li><strong>Hubraum</strong> – 224 cm³</li>
  <li><strong>Motordrehzahl</strong> – 2450 U/min</li>
  <li><strong>Batteriespannung</strong> – 12 V</li>
  <li><strong>Choke</strong> – Automatisch</li>
  <li><strong>Kühlsystem</strong> – Luft</li>
  <li><strong>Tankinhalt</strong> – 3,8 l</li>
  <li><strong>Maximale Arbeitsfläche</strong> – 1500 m²</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Ganganzahl</strong> – Manuell</li>
  <li><strong>Fangkorbtyp</strong> – 150 l</li>
  <li><strong>Lenkrad</strong> – Alpina ergonomisch</li>
  <li><strong>Sitzmodell</strong> – Alpina smart mit Rückenstütze</li>
  <li><strong>Sitzverstellung</strong> – Schraube</li>
  <li><strong>Vorderraddurchmesser</strong> – 11×4,00-4</li>
  <li><strong>Hinterraddurchmesser</strong> – 13×5,00-6</li>
  <li><strong>Wasseranschluss Reinigung</strong> – Ja</li>
  <li><strong>Fangkorbentleerung</strong> – Textil</li>
  <li><strong>Staufach</strong> – Ja</li>
  <li><strong>Pendelvorderachse</strong> – Ja</li>
  <li><strong>Sicherheitssystem</strong> – Sitz mit Sicherheitsschalter</li>
  <li><strong>Schallleistungspegel gemessen (LwA)</strong> – 98</li>
  <li><strong>Vibration Lenkrad max.</strong> – 7,76</li>
  <li><strong>Vibration Sitz max.</strong> – 2,94</li>
  <li><strong>Schallleistungspegel garantiert (LwA)</strong> – 98</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Tracteur tondeuse Alpina BT 66 Q</h2>
<p class="mb-3">La tondeuse autoportée ALPINA BT 66 Q est compacte et maniable grâce à son faible rayon de braquage. Elle permet ainsi de tondre facilement près des pierres et des bordures. Son moteur ALPINA 5750 développe une puissance impressionnante de 3,6 kW (4,9 ch) à 2 450 tr/min et une cylindrée de 224 cm³. Le système de tonte de la BT 66 Q répond à toutes les exigences. Que vous souhaitiez ramasser l'herbe coupée par l'éjection arrière dans le bac de ramassage de 150 litres, l'éjecter latéralement ou la broyer sur la pelouse grâce au kit mulching, la BT 66 Q offre une grande polyvalence. Elle propose une largeur de coupe de 66 cm et cinq hauteurs de coupe réglables de 30 à 64 mm. Avec ces caractéristiques, la BT 66 Q est idéale pour les jardins jusqu'à 1 200 m². Pour faciliter le nettoyage de la zone de tonte, un raccord d'eau est intégré, permettant le branchement d'un tuyau d'arrosage. Le tracteur tondeuse ALPINA BT 66 Q est fourni avec un chargeur de batterie et un sabot de broyage.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Système de tonte</strong> – Collecte, évacuation latérale</li>
  <li><strong>Rayon de la zone non tondue</strong> – 77,5 cm</li>
  <li><strong>Largeur de coupe</strong> – 66 cm</li>
  <li><strong>Tonte en marche arrière</strong> – Oui</li>
  <li><strong>Réglage de la hauteur de coupe</strong> – Manuel avec levier</li>
  <li><strong>Positions de hauteur de coupe</strong> – 5 positions</li>
  <li><strong>Hauteur de coupe</strong> – 30–64 mm</li>
  <li><strong>Nombre de couteaux</strong> – 1</li>
  <li><strong>Fonction de tonte supplémentaire</strong> – Paillis</li>
  <li><strong>Porte-lame</strong> – Manuellement</li>
  <li><strong>Technologie de conduite</strong> – 4 en avant + 1 en arrière</li>
  <li><strong>Type d'engrenage</strong> – Actionné par levier</li>
  <li><strong>Vitesse avant</strong> – Mécaniquement</li>
  <li><strong>Chargeur de batterie</strong> – Inclus</li>
  <li><strong>Attelage de remorquage</strong> – Non</li>
  <li><strong>Poids emballage compris</strong> – 147 kg</li>
  <li><strong>Longueur</strong> – 1830 mm</li>
  <li><strong>Performance</strong> – 3,6 kW</li>
  <li><strong>Source d'alimentation</strong> – Essence</li>
  <li><strong>Capacité de la batterie</strong> – 9 Ah</li>
  <li><strong>Marque du moteur</strong> – ALPINA</li>
  <li><strong>Modèle de moteur</strong> – ST 250 ES Propulsé par STIGA</li>
  <li><strong>Cylindrée du moteur</strong> – 224 cm³</li>
  <li><strong>Régime moteur</strong> – 2450 tr/min</li>
  <li><strong>Tension de la batterie</strong> – 12 V</li>
  <li><strong>Étrangleur</strong> – Automatiquement</li>
  <li><strong>Circuit de refroidissement</strong> – Air</li>
  <li><strong>Capacité du réservoir</strong> – 3,8 l</li>
  <li><strong>Surface de travail maximale</strong> – 1500 m²</li>
  <li><strong>Traction</strong> – Propulsion arrière</li>
  <li><strong>Nombre d'étapes</strong> – Manuel</li>
  <li><strong>Type de bac</strong> – 150 l</li>
  <li><strong>Volant</strong> – Alpina ergonomique</li>
  <li><strong>Modèle de siège</strong> – Alpina smart avec soutien dorsal</li>
  <li><strong>Réglage du siège</strong> – Vis</li>
  <li><strong>Diamètre de la roue avant</strong> – 11×4,00-4</li>
  <li><strong>Diamètre de la roue arrière</strong> – 13×5,00-6</li>
  <li><strong>Nettoyage du raccord d'eau</strong> – Oui</li>
  <li><strong>Vidange du bac</strong> – Textile</li>
  <li><strong>Compartiment de rangement</strong> – Oui</li>
  <li><strong>Essieu avant pivotant</strong> – Oui</li>
  <li><strong>Système de sécurité</strong> – Siège avec contacteur de sécurité</li>
  <li><strong>Niveau de puissance acoustique mesuré (LwA)</strong> – 98</li>
  <li><strong>Vibrations maximales au volant</strong> – 7,76</li>
  <li><strong>Vibrations maximales au siège</strong> – 2,94</li>
  <li><strong>Niveau de puissance acoustique garanti (LwA)</strong> – 98</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Alpina BT 66 Q Lawn Tractor</h2>
<p class="mb-3">The ALPINA BT 66 Q ride-on mower is compact and maneuverable thanks to its small turning radius, allowing it to mow easily close to stones and borders. Its ALPINA 5750 engine delivers an impressive 3.6 kW (4.9 hp) at 2,450 rpm with a displacement of 224 cm³. The BT 66 Q's mowing system meets all requirements. Whether you want to collect the grass clippings via rear discharge in the 150-liter collector, discharge them sideways, or mulch them on the lawn with the mulching kit, the BT 66 Q offers great versatility. It features a cutting width of 66 cm and five adjustable cutting heights from 30 to 64 mm. With these features, the BT 66 Q is ideal for gardens up to 1,200 m². For easy cleaning of the mowing deck, a water connection is integrated for attaching a garden hose. The ALPINA BT 66 Q lawn tractor comes with a battery charger and a mulching plug.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Mowing system</strong> – Collection, side discharge</li>
  <li><strong>Uncut area radius</strong> – 77.5 cm</li>
  <li><strong>Cutting width</strong> – 66 cm</li>
  <li><strong>Reverse mowing</strong> – Yes</li>
  <li><strong>Cutting height adjustment</strong> – Manual with lever</li>
  <li><strong>Cutting height positions</strong> – 5 positions</li>
  <li><strong>Cutting height</strong> – 30–64 mm</li>
  <li><strong>Number of blades</strong> – 1</li>
  <li><strong>Additional mowing function</strong> – Mulching</li>
  <li><strong>Blade holder</strong> – Manual</li>
  <li><strong>Drive technology</strong> – 4 forward + 1 reverse</li>
  <li><strong>Gear type</strong> – Lever operated</li>
  <li><strong>Forward speed</strong> – Mechanical</li>
  <li><strong>Battery charger</strong> – Included</li>
  <li><strong>Tow hitch</strong> – No</li>
  <li><strong>Weight incl. packaging</strong> – 147 kg</li>
  <li><strong>Length</strong> – 1830 mm</li>
  <li><strong>Power</strong> – 3.6 kW</li>
  <li><strong>Power source</strong> – Petrol</li>
  <li><strong>Battery capacity</strong> – 9 Ah</li>
  <li><strong>Engine brand</strong> – ALPINA</li>
  <li><strong>Engine model</strong> – ST 250 ES Powered by STIGA</li>
  <li><strong>Engine displacement</strong> – 224 cm³</li>
  <li><strong>Engine speed</strong> – 2450 rpm</li>
  <li><strong>Battery voltage</strong> – 12 V</li>
  <li><strong>Choke</strong> – Automatic</li>
  <li><strong>Cooling system</strong> – Air</li>
  <li><strong>Fuel tank capacity</strong> – 3.8 l</li>
  <li><strong>Maximum working area</strong> – 1500 m²</li>
  <li><strong>Drive</strong> – Rear wheel drive</li>
  <li><strong>Number of gears</strong> – Manual</li>
  <li><strong>Grass catcher type</strong> – 150 l</li>
  <li><strong>Steering wheel</strong> – Alpina ergonomic</li>
  <li><strong>Seat model</strong> – Alpina smart with back support</li>
  <li><strong>Seat adjustment</strong> – Screw</li>
  <li><strong>Front wheel diameter</strong> – 11×4.00-4</li>
  <li><strong>Rear wheel diameter</strong> – 13×5.00-6</li>
  <li><strong>Water connection cleaning</strong> – Yes</li>
  <li><strong>Grass catcher emptying</strong> – Textile</li>
  <li><strong>Storage compartment</strong> – Yes</li>
  <li><strong>Pivoting front axle</strong> – Yes</li>
  <li><strong>Safety system</strong> – Seat with safety switch</li>
  <li><strong>Measured sound power level (LwA)</strong> – 98</li>
  <li><strong>Max. vibration at steering wheel</strong> – 7.76</li>
  <li><strong>Max. vibration at seat</strong> – 2.94</li>
  <li><strong>Guaranteed sound power level (LwA)</strong> – 98</li>
</ul>`,
    price_eur: 1098.00,
    image_url: "/12-1.webp",
    gallery: ["/12-1.webp", "/12-2.webp", "/12-3.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-15T10:00:00Z",
  },
  {
    id: "prod-13",
    slug: "alpina-rasentraktor-at2-72-a",
    category_id: "cat-2",
    name_de: "Alpina Rasentraktor AT2 72 A",
    name_fr: "Tracteur tondeuse Alpina AT2 72 A",
    name_en: "Alpina Lawn Tractor AT2 72 A",
    description_de: `<h2 class="text-lg font-semibold mb-3">Alpina Rasentraktor AT2 72 A</h2>
<p class="mb-3">Mit kompakten Abmessungen, ausgezeichnetem Handling und einfacher Bedienung ist der ALPINA AT2 72 A der perfekte Einstieg in die Welt der Aufsitzmäher! Das Herzstück des AT2 72 A ist der 352 cm³ ST 350 Motor (Powered by STIGA), der mit einer Leistung von 6,5 kW (8,8 PS) bei 2800 U/min zu überzeugen weiß. Das Getriebe verfügt über 5 Vorwärtsgänge und einen Rückwärtsgang. Das Mähwerk ist mit einer Schnittbreite von 72 cm ausgestattet und kann über einen Hebel in 7 Positionen, von 30 bis 80 mm, eingestellt werden. Der große 170 Liter Fangkorb ermöglicht hierbei möglichst lange Arbeitsintervalle. Mit dieser Ausstattung eignet sich der AT2 72 A für Gärten von bis zu 2000 m². Für die leichte Reinigung des Mähraumes ist ein Wasseranschluss integriert, über den ein Schlauch angeschlossen werden kann. Der AT2 72 A kann mit einem Mulchkit um eine Mulchfunktion erweitert werden.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Anzahl Messer</strong> – 1</li>
  <li><strong>Anzahl Rückwärtsgänge</strong> – 1</li>
  <li><strong>Anzahl Vorwärtsgänge</strong> – 5</li>
  <li><strong>Auswurf</strong> – Heckauswurf</li>
  <li><strong>Wenderadius</strong> – 70 cm</li>
  <li><strong>Geschwindigkeit maximal</strong> – 9,7 km/h</li>
  <li><strong>Empfohlene Rasenfläche</strong> – 2000 m²</li>
  <li><strong>Betriebsart</strong> – Benzin</li>
  <li><strong>Gesamtlänge</strong> – 186 cm</li>
  <li><strong>Volumen Auffangbehälter</strong> – 170 l</li>
  <li><strong>Material Gehäuse</strong> – Kunststoff</li>
  <li><strong>Fangvorrichtung</strong> – Hardtop-Sack</li>
  <li><strong>Geräuschpegel</strong> – 99 dB</li>
  <li><strong>Schnitthöhe maximal</strong> – 8 cm</li>
  <li><strong>Schnitthöhe minimal</strong> – 3 cm</li>
  <li><strong>Art Motor</strong> – Benzinmotor</li>
  <li><strong>Motorhersteller</strong> – STIGA</li>
  <li><strong>Leistung</strong> – 6,5 kW / 8,8 PS</li>
  <li><strong>Schnittbreite</strong> – 72 cm</li>
  <li><strong>Schnitthöheneinstellung</strong> – 7-fach</li>
  <li><strong>Startsystem</strong> – Zündschlüssel</li>
  <li><strong>Fassungsvermögen Tank</strong> – 4 l</li>
  <li><strong>Getriebe</strong> – Schaltgetriebe</li>
  <li><strong>Hubraum</strong> – 352 cm³</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Tracteur tondeuse Alpina AT2 72 A</h2>
<p class="mb-3">Avec ses dimensions compactes, son excellente maniabilité et sa facilité d'utilisation, l'ALPINA AT2 72 A est l'entrée parfaite dans le monde des tondeuses autoportées ! Le cœur de l'AT2 72 A est le moteur ST 350 de 352 cm³ (Powered by STIGA), qui développe une puissance de 6,5 kW (8,8 ch) à 2800 tr/min. La transmission dispose de 5 vitesses avant et d'une marche arrière. La tonte est assurée par une largeur de coupe de 72 cm, réglable sur 7 positions de 30 à 80 mm à l'aide d'un levier. Le grand bac de ramassage de 170 litres permet de longs intervalles de travail. Avec ces caractéristiques, l'AT2 72 A convient aux jardins jusqu'à 2000 m². Pour faciliter le nettoyage du compartiment de tonte, un raccord d'eau est intégré permettant de brancher un tuyau d'arrosage. L'AT2 72 A peut être équipé d'un kit mulching pour une fonction de broyage.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Nombre de couteaux</strong> – 1</li>
  <li><strong>Nombre de vitesses arrière</strong> – 1</li>
  <li><strong>Nombre de vitesses avant</strong> – 5</li>
  <li><strong>Évacuation</strong> – Évacuation arrière</li>
  <li><strong>Rayon de braquage</strong> – 70 cm</li>
  <li><strong>Vitesse maximale</strong> – 9,7 km/h</li>
  <li><strong>Surface de pelouse recommandée</strong> – 2000 m²</li>
  <li><strong>Mode de fonctionnement</strong> – Essence</li>
  <li><strong>Longueur totale</strong> – 186 cm</li>
  <li><strong>Volume du bac de ramassage</strong> – 170 l</li>
  <li><strong>Matériau du carter</strong> – Plastique</li>
  <li><strong>Type de bac</strong> – Bac rigide</li>
  <li><strong>Niveau sonore</strong> – 99 dB</li>
  <li><strong>Hauteur de coupe maximale</strong> – 8 cm</li>
  <li><strong>Hauteur de coupe minimale</strong> – 3 cm</li>
  <li><strong>Type de moteur</strong> – Moteur essence</li>
  <li><strong>Fabricant du moteur</strong> – STIGA</li>
  <li><strong>Puissance</strong> – 6,5 kW / 8,8 ch</li>
  <li><strong>Largeur de coupe</strong> – 72 cm</li>
  <li><strong>Réglage de la hauteur de coupe</strong> – 7 positions</li>
  <li><strong>Système de démarrage</strong> – Clé de contact</li>
  <li><strong>Capacité du réservoir</strong> – 4 l</li>
  <li><strong>Transmission</strong> – Boîte manuelle</li>
  <li><strong>Cylindrée</strong> – 352 cm³</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Alpina Lawn Tractor AT2 72 A</h2>
<p class="mb-3">With compact dimensions, excellent handling and ease of use, the ALPINA AT2 72 A is the perfect entry into the world of ride-on mowers! The heart of the AT2 72 A is the 352 cm³ ST 350 engine (Powered by STIGA), delivering 6.5 kW (8.8 hp) at 2800 rpm. The transmission has 5 forward gears and 1 reverse gear. The cutting deck has a width of 72 cm and can be adjusted to 7 positions from 30 to 80 mm via a lever. The large 170 litre grass catcher allows for long working intervals. With this equipment, the AT2 72 A is suitable for gardens up to 2000 m². For easy cleaning of the mowing deck, a water connection is integrated for attaching a garden hose. The AT2 72 A can be upgraded with a mulching kit for mulching functionality.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Number of blades</strong> – 1</li>
  <li><strong>Reverse gears</strong> – 1</li>
  <li><strong>Forward gears</strong> – 5</li>
  <li><strong>Discharge</strong> – Rear discharge</li>
  <li><strong>Turning radius</strong> – 70 cm</li>
  <li><strong>Maximum speed</strong> – 9.7 km/h</li>
  <li><strong>Recommended lawn area</strong> – 2000 m²</li>
  <li><strong>Power source</strong> – Petrol</li>
  <li><strong>Overall length</strong> – 186 cm</li>
  <li><strong>Grass catcher volume</strong> – 170 l</li>
  <li><strong>Housing material</strong> – Plastic</li>
  <li><strong>Collection type</strong> – Hardtop bag</li>
  <li><strong>Noise level</strong> – 99 dB</li>
  <li><strong>Maximum cutting height</strong> – 8 cm</li>
  <li><strong>Minimum cutting height</strong> – 3 cm</li>
  <li><strong>Engine type</strong> – Petrol engine</li>
  <li><strong>Engine manufacturer</strong> – STIGA</li>
  <li><strong>Power</strong> – 6.5 kW / 8.8 hp</li>
  <li><strong>Cutting width</strong> – 72 cm</li>
  <li><strong>Cutting height adjustment</strong> – 7 positions</li>
  <li><strong>Starting system</strong> – Ignition key</li>
  <li><strong>Fuel tank capacity</strong> – 4 l</li>
  <li><strong>Transmission</strong> – Manual gearbox</li>
  <li><strong>Displacement</strong> – 352 cm³</li>
</ul>`,
    price_eur: 1499.00,
    image_url: "/13-1.webp",
    gallery: ["/13-1.webp", "/13-2.webp", "/13-3.webp", "/13-4.webp", "/13-5.webp", "/13-6.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-20T10:00:00Z",
  },
  {
    id: "prod-14",
    slug: "alpina-rasentraktor-at3-98-a",
    category_id: "cat-2",
    name_de: "Alpina Rasentraktor AT3 98 A",
    name_fr: "Tracteur tondeuse Alpina AT3 98 A",
    name_en: "Alpina Lawn Tractor AT3 98 A",
    description_de: `<h2 class="text-lg font-semibold mb-3">Alpina Rasentraktor AT3 98 A</h2>
<p class="mb-3">Der ALPINA AT3 98 A ist ein kompakter Seitenauswurf-Rasentraktor, der dank seines kleinen Wendekreises leicht zu fahren ist. So lassen sich Rasenflächen in der Nähe von Steinen oder Kanten problemlos schneiden. Das Herzstück des AT3 98 A ist der ST 350 Motor (Powered by STIGA), der mit einer Leistung von 6,5 kW (8,8 PS) bei 2800 U/min und einem Hubraum von 352 cm³ zu überzeugen weiß. Das Mähwerk ist mit zwei gegenläufigen Doppelmessern ausgestattet und kann bequem über die elektromagnetische Kupplung zugeschaltet werden. Danach steht Dir eine 98 cm Schnittbreite zur Verfügung, die sich in 7 Stufen, von 25 bis 80 mm, in ihrer Schnitthöhe regulieren lässt. Hierbei wird durch die Tasträder stets sichergestellt, dass ein Kontakt des Mähwerks mit dem Boden vermieden wird. Der AT3 98 A verfügt über einen Wasseranschluss, der die Reinigung des Mähraumes erleichtert. Mit dieser Ausstattung eignet sich der AT3 98 A für Rasenflächen von bis zu 4500 m². Dank der Scheinwerfer ist selbst das Mähen in der Dämmerung kein Problem. Der AT3 98 A kann durch zahlreiches Zubehör, wie zum Beispiel ein Mulchkit oder ein Schneeschild für den Winterdienst, erweitert werden.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Anzahl Rückwärtsgänge</strong> – 1</li>
  <li><strong>Anzahl Vorwärtsgänge</strong> – 5</li>
  <li><strong>Auswurf</strong> – Seitenauswurf</li>
  <li><strong>Wenderadius</strong> – 70 cm</li>
  <li><strong>Geschwindigkeit maximal</strong> – 9,7 km/h</li>
  <li><strong>Empfohlene Rasenfläche</strong> – 4500 m²</li>
  <li><strong>Betriebsart</strong> – Benzin</li>
  <li><strong>Gesamtlänge</strong> – 173 cm</li>
  <li><strong>Material Gehäuse</strong> – Kunststoff</li>
  <li><strong>Fangvorrichtung</strong> – Keine</li>
  <li><strong>Geräuschpegel</strong> – 99 dB</li>
  <li><strong>Schnitthöhe maximal</strong> – 8 cm</li>
  <li><strong>Schnitthöhe minimal</strong> – 2,5 cm</li>
  <li><strong>Art Motor</strong> – Benzinmotor</li>
  <li><strong>Motorhersteller</strong> – STIGA</li>
  <li><strong>Leistung</strong> – 6,5 kW / 8,8 PS</li>
  <li><strong>Schnittbreite</strong> – 98 cm</li>
  <li><strong>Schnitthöheneinstellung</strong> – 7-fach</li>
  <li><strong>Startsystem</strong> – Zündschlüssel</li>
  <li><strong>Fassungsvermögen Tank</strong> – 6 l</li>
  <li><strong>Getriebe</strong> – Schaltgetriebe</li>
  <li><strong>Hubraum</strong> – 352 cm³</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Tracteur tondeuse Alpina AT3 98 A</h2>
<p class="mb-3">L'ALPINA AT3 98 A est un tracteur tondeuse compact à évacuation latérale, facile à conduire grâce à son petit rayon de braquage. Il permet de tondre facilement les pelouses près des pierres ou des bordures. Le cœur de l'AT3 98 A est le moteur ST 350 (Powered by STIGA) développant 6,5 kW (8,8 ch) à 2800 tr/min avec une cylindrée de 352 cm³. La tondeuse est équipée de deux lames jumelles rotatives, engagées facilement via l'embrayage électromagnétique. Elle offre une largeur de coupe de 98 cm réglable sur 7 positions de 25 à 80 mm. Des roues palpeuses empêchent tout contact du carter de coupe avec le sol. L'AT3 98 A dispose d'un raccord d'eau pour faciliter le nettoyage du compartiment de tonte. Avec ces caractéristiques, l'AT3 98 A convient aux pelouses jusqu'à 4500 m². Grâce à ses phares, tondre à la tombée de la nuit ne pose aucun problème. L'AT3 98 A peut être équipé de nombreux accessoires comme un kit mulching ou une lame à neige pour le service hivernal.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Nombre de couteaux</strong> – 2</li>
  <li><strong>Nombre de vitesses arrière</strong> – 1</li>
  <li><strong>Nombre de vitesses avant</strong> – 5</li>
  <li><strong>Évacuation</strong> – Évacuation latérale</li>
  <li><strong>Rayon de braquage</strong> – 70 cm</li>
  <li><strong>Vitesse maximale</strong> – 9,7 km/h</li>
  <li><strong>Surface de pelouse recommandée</strong> – 4500 m²</li>
  <li><strong>Mode de fonctionnement</strong> – Essence</li>
  <li><strong>Longueur totale</strong> – 173 cm</li>
  <li><strong>Matériau du carter</strong> – Plastique</li>
  <li><strong>Type de bac</strong> – Aucun</li>
  <li><strong>Niveau sonore</strong> – 99 dB</li>
  <li><strong>Hauteur de coupe maximale</strong> – 8 cm</li>
  <li><strong>Hauteur de coupe minimale</strong> – 2,5 cm</li>
  <li><strong>Type de moteur</strong> – Moteur essence</li>
  <li><strong>Fabricant du moteur</strong> – STIGA</li>
  <li><strong>Puissance</strong> – 6,5 kW / 8,8 ch</li>
  <li><strong>Largeur de coupe</strong> – 98 cm</li>
  <li><strong>Réglage de la hauteur de coupe</strong> – 7 positions</li>
  <li><strong>Système de démarrage</strong> – Clé de contact</li>
  <li><strong>Capacité du réservoir</strong> – 6 l</li>
  <li><strong>Transmission</strong> – Boîte manuelle</li>
  <li><strong>Cylindrée</strong> – 352 cm³</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Alpina Lawn Tractor AT3 98 A</h2>
<p class="mb-3">The ALPINA AT3 98 A is a compact side-discharge lawn tractor that is easy to drive thanks to its small turning radius, allowing you to mow lawns near stones or edges effortlessly. The heart of the AT3 98 A is the ST 350 engine (Powered by STIGA) delivering 6.5 kW (8.8 hp) at 2800 rpm with a displacement of 352 cm³. The cutting deck is equipped with two counter-rotating twin blades and can be conveniently engaged via the electromagnetic clutch. It provides a cutting width of 98 cm adjustable to 7 positions from 25 to 80 mm. Gauge wheels prevent the cutting deck from contacting the ground. The AT3 98 A features a water connection for easy cleaning of the mowing compartment. With this equipment, the AT3 98 A is suitable for lawns up to 4500 m². Thanks to its headlights, mowing at dusk is no problem. The AT3 98 A can be expanded with numerous accessories such as a mulching kit or a snow blade for winter service.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Number of blades</strong> – 2</li>
  <li><strong>Reverse gears</strong> – 1</li>
  <li><strong>Forward gears</strong> – 5</li>
  <li><strong>Discharge</strong> – Side discharge</li>
  <li><strong>Turning radius</strong> – 70 cm</li>
  <li><strong>Maximum speed</strong> – 9.7 km/h</li>
  <li><strong>Recommended lawn area</strong> – 4500 m²</li>
  <li><strong>Power source</strong> – Petrol</li>
  <li><strong>Overall length</strong> – 173 cm</li>
  <li><strong>Housing material</strong> – Plastic</li>
  <li><strong>Collection type</strong> – None</li>
  <li><strong>Noise level</strong> – 99 dB</li>
  <li><strong>Maximum cutting height</strong> – 8 cm</li>
  <li><strong>Minimum cutting height</strong> – 2.5 cm</li>
  <li><strong>Engine type</strong> – Petrol engine</li>
  <li><strong>Engine manufacturer</strong> – STIGA</li>
  <li><strong>Power</strong> – 6.5 kW / 8.8 hp</li>
  <li><strong>Cutting width</strong> – 98 cm</li>
  <li><strong>Cutting height adjustment</strong> – 7 positions</li>
  <li><strong>Starting system</strong> – Ignition key</li>
  <li><strong>Fuel tank capacity</strong> – 6 l</li>
  <li><strong>Transmission</strong> – Manual gearbox</li>
  <li><strong>Displacement</strong> – 352 cm³</li>
</ul>`,
    price_eur: 1190.00,
    image_url: "/14-1.webp",
    gallery: ["/14-1.webp", "/14-2.webp", "/14-3.webp", "/14-4.webp", "/14-5.webp", "/14-6.webp", "/14-7.webp", "/14-8.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-25T10:00:00Z",
  },
  {
    id: "prod-15",
    slug: "alpina-rasentraktor-at4-84-a",
    category_id: "cat-2",
    name_de: "Alpina Rasentraktor AT4 84 A",
    name_fr: "Tracteur tondeuse Alpina AT4 84 A",
    name_en: "Alpina Lawn Tractor AT4 84 A",
    description_de: `<h2 class="text-lg font-semibold mb-3">Alpina Rasentraktor AT4 84 A</h2>
<p class="mb-3">Der ALPINA Rasentraktor AT4 84 A sorgt mit seinem kleinen Wendekreis und einer Geschwindigkeit von bis zu 9,7 km/h für Spaß bei der Rasenpflege. Angetrieben wird er von einem ST 350 Motor (Powered by STIGA), mit 5,8 kW (7,9 PS) bei 2400 U/min und einem Hubraum von 352 cm³, der durch konstante Leistung und Langlebigkeit überzeugt. Das Mähwerk ist mit zwei gegenläufigen Doppelmessern ausgestattet und kann bequem über die elektromagnetische Kupplung zugeschaltet werden. Danach steht Dir eine 84 cm Schnittbreite zur Verfügung, die sich in 7 Stufen, von 25 bis 80 mm, in ihrer Schnitthöhe regulieren lässt. Hierbei wird durch die Tasträder stets sichergestellt, dass ein Kontakt des Mähwerks mit dem Boden vermieden wird. Der AT4 84 A verfügt über einen Wasseranschluss, der die Reinigung des Mähraumes erleichtert. Er ist für Rasenflächen von bis zu 3000 m² geeignet. Durch die Scheinwerfer und das LED beleuchtete Armaturenbrett ist selbst das Mähen in der Dämmerung kein Problem. Der AT4 84 A kann durch zahlreiches Zubehör wie zum Beispiel ein Mulchkit, ein Prallblech für den Heckauswurf und ein Schneeschild für den Winterdienst erweitert werden. Der Rasentraktor wird teilmontiert geliefert.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Anzahl Rückwärtsgänge</strong> – 5</li>
  <li><strong>Anzahl Vorwärtsgänge</strong> – 1</li>
  <li><strong>Auswurf</strong> – Heckauswurf</li>
  <li><strong>Wenderadius</strong> – 80 cm</li>
  <li><strong>Geschwindigkeit maximal</strong> – 9,7 km/h</li>
  <li><strong>Empfohlene Rasenfläche</strong> – 3000 m²</li>
  <li><strong>Betriebsart</strong> – Benzin</li>
  <li><strong>Gesamtlänge</strong> – 234 cm</li>
  <li><strong>Material Gehäuse</strong> – Kunststoff</li>
  <li><strong>Fangvorrichtung</strong> – Hardtop-Sack</li>
  <li><strong>Geräuschpegel</strong> – 100 dB</li>
  <li><strong>Schnitthöhe maximal</strong> – 8 cm</li>
  <li><strong>Schnitthöhe minimal</strong> – 2,5 cm</li>
  <li><strong>Art Motor</strong> – Benzinmotor</li>
  <li><strong>Motorhersteller</strong> – STIGA</li>
  <li><strong>Leistung</strong> – 5,8 kW / 7,9 PS</li>
  <li><strong>Schnittbreite</strong> – 84 cm</li>
  <li><strong>Schnitthöheneinstellung</strong> – 7-fach</li>
  <li><strong>Startsystem</strong> – Zündschlüssel</li>
  <li><strong>Fassungsvermögen Tank</strong> – 6 l</li>
  <li><strong>Getriebe</strong> – Schaltgetriebe</li>
  <li><strong>Hubraum</strong> – 352 cm³</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Tracteur tondeuse Alpina AT4 84 A</h2>
<p class="mb-3">Le tracteur tondeuse ALPINA AT4 84 A rend l'entretien de la pelouse agréable grâce à son petit rayon de braquage et sa vitesse pouvant atteindre 9,7 km/h. Il est propulsé par un moteur ST 350 (Powered by STIGA) de 5,8 kW (7,9 ch) à 2400 tr/min avec une cylindrée de 352 cm³, offrant puissance constante et longévité. La tondeuse est équipée de deux lames jumelles rotatives, engagées via l'embrayage électromagnétique. Elle offre une largeur de coupe de 84 cm réglable sur 7 positions de 25 à 80 mm. Des roues palpeuses empêchent tout contact du carter avec le sol. L'AT4 84 A dispose d'un raccord d'eau pour faciliter le nettoyage. Il convient aux pelouses jusqu'à 3000 m². Grâce à ses phares et son tableau de bord éclairé par LED, tondre à la tombée de la nuit ne pose aucun problème. L'AT4 84 A peut être équipé de nombreux accessoires comme un kit mulching, une tôle de déflexion pour l'éjection arrière et une lame à neige pour l'hiver. Le tracteur est livré partiellement assemblé.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Nombre de couteaux</strong> – 2</li>
  <li><strong>Nombre de vitesses arrière</strong> – 5</li>
  <li><strong>Nombre de vitesses avant</strong> – 1</li>
  <li><strong>Évacuation</strong> – Évacuation arrière</li>
  <li><strong>Rayon de braquage</strong> – 80 cm</li>
  <li><strong>Vitesse maximale</strong> – 9,7 km/h</li>
  <li><strong>Surface de pelouse recommandée</strong> – 3000 m²</li>
  <li><strong>Mode de fonctionnement</strong> – Essence</li>
  <li><strong>Longueur totale</strong> – 234 cm</li>
  <li><strong>Matériau du carter</strong> – Plastique</li>
  <li><strong>Type de bac</strong> – Bac Hardtop</li>
  <li><strong>Niveau sonore</strong> – 100 dB</li>
  <li><strong>Hauteur de coupe maximale</strong> – 8 cm</li>
  <li><strong>Hauteur de coupe minimale</strong> – 2,5 cm</li>
  <li><strong>Type de moteur</strong> – Moteur essence</li>
  <li><strong>Fabricant du moteur</strong> – STIGA</li>
  <li><strong>Puissance</strong> – 5,8 kW / 7,9 ch</li>
  <li><strong>Largeur de coupe</strong> – 84 cm</li>
  <li><strong>Réglage de la hauteur de coupe</strong> – 7 positions</li>
  <li><strong>Système de démarrage</strong> – Clé de contact</li>
  <li><strong>Capacité du réservoir</strong> – 6 l</li>
  <li><strong>Transmission</strong> – Boîte manuelle</li>
  <li><strong>Cylindrée</strong> – 352 cm³</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Alpina Lawn Tractor AT4 84 A</h2>
<p class="mb-3">The ALPINA lawn tractor AT4 84 A makes lawn care enjoyable with its small turning radius and speed of up to 9.7 km/h. It is powered by an ST 350 engine (Powered by STIGA) delivering 5.8 kW (7.9 hp) at 2400 rpm with a displacement of 352 cm³, offering consistent power and durability. The cutting deck is equipped with two counter-rotating twin blades, easily engaged via the electromagnetic clutch. It provides a cutting width of 84 cm adjustable to 7 positions from 25 to 80 mm. Gauge wheels prevent the cutting deck from contacting the ground. The AT4 84 A features a water connection for easy cleaning. It is suitable for lawns up to 3000 m². Thanks to its headlights and LED-lit dashboard, mowing at dusk is no problem. The AT4 84 A can be expanded with accessories such as a mulching kit, a deflector plate for rear discharge, and a snow blade for winter service. The tractor is delivered partially assembled.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Number of blades</strong> – 2</li>
  <li><strong>Reverse gears</strong> – 5</li>
  <li><strong>Forward gears</strong> – 1</li>
  <li><strong>Discharge</strong> – Rear discharge</li>
  <li><strong>Turning radius</strong> – 80 cm</li>
  <li><strong>Maximum speed</strong> – 9.7 km/h</li>
  <li><strong>Recommended lawn area</strong> – 3000 m²</li>
  <li><strong>Power source</strong> – Petrol</li>
  <li><strong>Overall length</strong> – 234 cm</li>
  <li><strong>Housing material</strong> – Plastic</li>
  <li><strong>Collection type</strong> – Hardtop bag</li>
  <li><strong>Noise level</strong> – 100 dB</li>
  <li><strong>Maximum cutting height</strong> – 8 cm</li>
  <li><strong>Minimum cutting height</strong> – 2.5 cm</li>
  <li><strong>Engine type</strong> – Petrol engine</li>
  <li><strong>Engine manufacturer</strong> – STIGA</li>
  <li><strong>Power</strong> – 5.8 kW / 7.9 hp</li>
  <li><strong>Cutting width</strong> – 84 cm</li>
  <li><strong>Cutting height adjustment</strong> – 7 positions</li>
  <li><strong>Starting system</strong> – Ignition key</li>
  <li><strong>Fuel tank capacity</strong> – 6 l</li>
  <li><strong>Transmission</strong> – Manual gearbox</li>
  <li><strong>Displacement</strong> – 352 cm³</li>
</ul>`,
    price_eur: 1395.00,
    image_url: "/15-1.webp",
    gallery: ["/15-1.webp", "/15-2.webp", "/15-3.webp", "/15-4.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-26T10:00:00Z",
  },
  {
    id: "prod-16",
    slug: "black-edition-pro-165-84-h-rasentraktor-mit-schneeschild-110-plus",
    category_id: "cat-2",
    name_de: "Black Edition PRO 165/84 H Rasentraktor mit Schneeschild 110 Plus – Modell 2023",
    name_fr: "Black Edition PRO 165/84 H Tracteur tondeuse avec lame à neige 110 Plus – Modèle 2023",
    name_en: "Black Edition PRO 165/84 H Lawn Tractor with Snow Blade 110 Plus – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Black Edition PRO 165/84 H Rasentraktor mit Schneeschild 110 Plus – Modell 2023</h2>

<p class="mb-3"><strong>Black Edition® PRO 165/84 Hydrostat – Winterpaket 110 Plus inkl. Mulchkit</strong></p>

<p class="mb-3">Kompakter Rasentraktor mit STIGA-Motor ST 450, 84 cm breitem Mähdeck mit zwei Messern und 240 Liter Heckfangkorb. Mähen auch bei Rückwärtsfahrt möglich!</p>

<p class="mb-3">Der neue Rasentraktor Black Edition® 165/84 H hat ein neues modernes Design und eignet sich für alle Arten von Benutzern. Der STIGA Benzinmotor hat eine Motorleistung von 10,5 kW bei 3600 U/min. Der Mäher ist mit einem pedalgesteuerten Hydrostatantrieb ausgestattet, der eine gleichmäßige Regelung der Fahrgeschwindigkeit ermöglicht, ohne dass der Gang gewechselt werden muss. Bei dem 84 cm breiten Mähdeck mit zwei Messern lassen sich 7 verschiedene Schnitthöhen zwischen 25 und 80 mm auswählen. Die praktische elektromagnetische Messerkupplung wird per Tastendruck gesteuert. Der Black Edition® Aufsitzmäher PRO 165/84 H hat einen hinteren 240 Liter Fangkorb und wird mit dem STIGA Multiclip-Mulchkit geliefert.</p>

<p class="mb-3">Das erhöhte 3-Speichen-Lenkrad und der gepolsterte Sitz mit hoher Rückenlehne sorgen für ergonomisches, komfortables Fahren.</p>

<h3 class="font-semibold mb-2 mt-5">Set besteht aus:</h3>
<ul class="space-y-1 mb-3">
  <li>Black Edition® Rasentraktor PRO 165/84 H</li>
  <li>Schneeräumschild Standard Plus 110</li>
  <li>Anbaurahmen für Schneeräumschild</li>
  <li>Standard PLUS Verstellhebel</li>
  <li>Schneekette 18×8.50-8 (Paar)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Ausstattungsdetails der Black Edition® Series</h3>
<ul class="space-y-1 mb-3">
  <li>Serienmäßig Komfort Sitz mit hoher Lehne</li>
  <li>Serienmäßig Frontstoßstange</li>
  <li>Serienmäßig Deckwaschdüsen</li>
  <li>Serienmäßig Hydrostat</li>
  <li>Extra breite Vorderräder</li>
  <li>Inkl. Mulchkit</li>
  <li>Große 240 l Fangbox mit Aushebestange vom Fahrersitz</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Produkt Vorteile:</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Frontstoßstange</strong> – schützt den Rasentraktor gegen Beschädigung im Frontbereich</li>
  <li><strong>Elektrische Messerzuschaltung</strong> – Bequeme Mähwerkszuschaltung durch einfaches Betätigen des Schalters</li>
  <li><strong>Pedalgesteuertes Hydrostatikgetriebe</strong> – Bequeme Geschwindigkeits- und Richtungskontrolle; Großes Pedal zum Vorwärts- sowie Rückwärtsfahren</li>
  <li><strong>Offener Durchstieg mit Ablagefach</strong> – Für bequemen Ein- und Ausstieg</li>
  <li><strong>Abschmierbare Pendelvorderachse</strong> – Sorgt für gute Balance und herausragenden Fahrkomfort mit Schmiernippeln</li>
  <li><strong>Füllstandsanzeige</strong> – Signal weist darauf hin, dass die Fangbox voll ist</li>
  <li><strong>Doppelscheinwerfer</strong> – Erleichtert das Arbeiten während der Dunkelheit</li>
  <li><strong>Am Kotflügel montierte Schnitthöhenverstellung</strong> – Federgestütztes Mähdeck erleichtert die Einstellung</li>
  <li><strong>Pendelnd aufgehängtes Mähwerk</strong> – Optimale Bodenanpassung, vermeidet Skalpieren</li>
  <li><strong>2 Wasserschlauchanschlüsse</strong> – Erleichtert das Reinigen des Mähdecks</li>
  <li><strong>Kompaktes Design</strong> – Leicht zu manövrieren, weniger Platz zur Lagerung</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten – Rasentraktor</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motorhersteller</strong> – STIGA ST 450 OHV</li>
  <li><strong>Hubraum</strong> – 432 ccm</li>
  <li><strong>Geräte Nennleistung</strong> – 6,8 kW @ 2.400 U/min</li>
  <li><strong>Motorleistung</strong> – 10,5 KW @ 3600 U/min</li>
  <li><strong>Breite Mähdeck</strong> – 84 cm</li>
  <li><strong>Mähsystem</strong> – MPS84H</li>
  <li><strong>Auswurf</strong> – Heckauswurf</li>
  <li><strong>Messer Typ</strong> – Zwei Fangmesser</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Schnitthöhen</strong> – 7 Positionen, 28 – 80 mm</li>
  <li><strong>Messeraufnahme</strong> – Elektromagnetische Kupplung</li>
  <li><strong>Volumen Grasfangkorb</strong> – 240 l</li>
  <li><strong>Tankinhalt</strong> – 6,0 l</li>
  <li><strong>Rädergröße</strong> – 15″-18″</li>
  <li><strong>Scheinwerfer</strong> – Doppelscheinwerfer</li>
  <li><strong>Mulchkit / Messer</strong> – Multiclip Messer + Mulchstopfen: ja</li>
  <li><strong>Nettogewicht</strong> – 160 kg</li>
  <li><strong>Bruttogewicht</strong> – 192,3 kg</li>
  <li><strong>Raddurchmesser vorne</strong> – 15×5.00-6</li>
  <li><strong>Raddurchmesser hinten</strong> – 18×6.50-8</li>
  <li><strong>Kleinster Wendekreis</strong> – 180 cm</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 2338 × 880 × 1100 mm</li>
  <li><strong>Verpackungsmaße (L×B×H)</strong> – 1700 × 1120 × 837 mm</li>
  <li><strong>Eigengewicht</strong> – 181 kg</li>
  <li><strong>Bruttogewicht</strong> – 228 kg</li>
  <li><strong>Vibration Lenkrad max</strong> – 6,37 m/s²</li>
  <li><strong>Vibration Sitz max</strong> – 1,06 m/s²</li>
  <li><strong>Geräuschpegel</strong> – 100 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Schneeschild Standard Plus 110 – mit Anbaurahmen</h3>
<p class="mb-3">Das Räumschild besitzt eine Sicherheits-Klappmechanik. Trifft das Schneeschild auf ein Hindernis (z.B. einen Kanaldeckel), wird eine Überlastsicherung ausgelöst und das Schild klappt nahezu ohne Kraftaufwand aus dem Gefahrenbereich.</p>
<p class="mb-3">Breite: 1,10 m (110 cm), Höhe: ca. 0,40 m (40 cm). Wird serienmäßig mit einer Gummileiste ausgeliefert. Die 2 einstellbaren Gleitspitzen unterstützen die Stahl-Gummileiste vor Hindernissen.</p>

<h4 class="font-semibold mb-2">Vorteile Schneeschild:</h4>
<ul class="space-y-1 mb-3">
  <li>Beweglicher Teil klappt weg bei starker Beanspruchung oder festen Hindernissen</li>
  <li>Spannkraft der Zugfedern kann je nach Bedarf verstellt werden</li>
  <li>Schneeschild kann vom Fahrersitz aus angehoben werden</li>
  <li>Schneeschild seitlich schwenkbar in 5 Positionen</li>
</ul>

<h4 class="font-semibold mb-2">Technische Daten Schneeschild:</h4>
<ul class="space-y-1 mb-3">
  <li>Stahl Schneeräumschild lackiert mit Sicherheitsfederklappen</li>
  <li>Anbaurahmen mit Aushebung</li>
  <li>Bedienhebel für seitliche Verstellung und Aushebung</li>
  <li>Gummischürfleiste</li>
  <li>2 Gleitspitzen</li>
  <li>Montagematerial Traktor</li>
  <li>Inkl. 2 Schneeketten 18×8.50-8</li>
</ul>

<p><strong>Betriebsart:</strong> Benzin | <strong>Schnittbreite:</strong> 84 cm | <strong>Getriebeart:</strong> Hydrostat | <strong>Motorvariante:</strong> 1 Zylinder | <strong>Antriebsart:</strong> Heckantrieb</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Black Edition PRO 165/84 H Tracteur tondeuse avec lame à neige 110 Plus – Modèle 2023</h2>

<p class="mb-3"><strong>Black Edition® PRO 165/84 Hydrostat – Pack hiver 110 Plus avec kit mulching</strong></p>

<p class="mb-3">Tracteur tondeuse compact avec moteur STIGA ST 450, plateau de coupe de 84 cm à deux lames et bac arrière de 240 litres. Tonte possible même en marche arrière !</p>

<p class="mb-3">Le nouveau tracteur tondeuse Black Edition® 165/84 H arbore un design moderne et convient à tous les utilisateurs. Le moteur essence STIGA développe 10,5 kW à 3600 tr/min. La tondeuse est équipée d'une transmission hydrostatique à pédale pour un contrôle progressif de la vitesse sans changement de vitesse. Le plateau de coupe de 84 cm offre 7 hauteurs de coupe de 25 à 80 mm. L'embrayage électromagnétique des lames se commande par bouton-poussoir. Le bac arrière a une capacité de 240 litres. Le kit mulching STIGA Multiclip est inclus.</p>

<p class="mb-3">Le volant surélevé à 3 branches et le siège rembourré à dossier haut assurent un confort de conduite ergonomique.</p>

<h3 class="font-semibold mb-2 mt-5">Le set comprend :</h3>
<ul class="space-y-1 mb-3">
  <li>Tracteur tondeuse Black Edition® PRO 165/84 H</li>
  <li>Lame à neige Standard Plus 110</li>
  <li>Châssis de montage pour lame à neige</li>
  <li>Levier de réglage Standard PLUS</li>
  <li>Chaînes à neige 18×8.50-8 (paire)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Caractéristiques de la série Black Edition®</h3>
<ul class="space-y-1 mb-3">
  <li>Siège confort à dossier haut de série</li>
  <li>Pare-chocs avant de série</li>
  <li>Raccord de lavage du plateau de série</li>
  <li>Transmission hydrostatique de série</li>
  <li>Roues avant extra larges</li>
  <li>Kit mulching inclus</li>
  <li>Grand bac de 240 l avec levier de vidage depuis le siège</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Avantages du produit :</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Pare-chocs avant</strong> – protège le tracteur des dommages à l'avant</li>
  <li><strong>Embrayage électrique des lames</strong> – activation simple par interrupteur</li>
  <li><strong>Transmission hydrostatique à pédale</strong> – contrôle progressif de la vitesse avant et arrière</li>
  <li><strong>Ouverture avec compartiment de rangement</strong> – entrée et sortie faciles</li>
  <li><strong>Essieu avant pendulaire graissable</strong> – bon équilibre et confort exceptionnel</li>
  <li><strong>Indicateur de remplissage</strong> – signale quand le bac est plein</li>
  <li><strong>Double phare</strong> – travail facilité à la tombée de la nuit</li>
  <li><strong>Réglage de hauteur de coupe sur l'aile</strong> – plateau à ressort pour un réglage facile</li>
  <li><strong>Plateau de coupe suspendu</strong> – adaptation optimale au sol, évite le scalpage</li>
  <li><strong>2 raccords d'eau</strong> – nettoyage facile du plateau</li>
  <li><strong>Design compact</strong> – facile à manœuvrer, peu d'espace de stockage</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques – Tracteur tondeuse</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Fabricant moteur</strong> – STIGA ST 450 OHV</li>
  <li><strong>Cylindrée</strong> – 432 cm³</li>
  <li><strong>Puissance nominale</strong> – 6,8 kW @ 2.400 tr/min</li>
  <li><strong>Puissance moteur</strong> – 10,5 kW @ 3600 tr/min</li>
  <li><strong>Largeur de coupe</strong> – 84 cm</li>
  <li><strong>Système de coupe</strong> – MPS84H</li>
  <li><strong>Évacuation</strong> – Arrière</li>
  <li><strong>Type de lames</strong> – Deux lames de capture</li>
  <li><strong>Transmission</strong> – Hydrostatique</li>
  <li><strong>Hauteurs de coupe</strong> – 7 positions, 28 – 80 mm</li>
  <li><strong>Embrayage des lames</strong> – Électromagnétique</li>
  <li><strong>Volume du bac</strong> – 240 l</li>
  <li><strong>Capacité réservoir</strong> – 6,0 l</li>
  <li><strong>Taille des roues</strong> – 15″-18″</li>
  <li><strong>Phares</strong> – Double phare</li>
  <li><strong>Kit mulching</strong> – Lames Multiclip + bouchon : oui</li>
  <li><strong>Poids net</strong> – 160 kg</li>
  <li><strong>Poids brut</strong> – 192,3 kg</li>
  <li><strong>Diamètre roues avant</strong> – 15×5.00-6</li>
  <li><strong>Diamètre roues arrière</strong> – 18×6.50-8</li>
  <li><strong>Rayon de braquage min</strong> – 180 cm</li>
  <li><strong>Dimensions (L×l×H)</strong> – 2338 × 880 × 1100 mm</li>
  <li><strong>Dimensions colis (L×l×H)</strong> – 1700 × 1120 × 837 mm</li>
  <li><strong>Poids propre</strong> – 181 kg</li>
  <li><strong>Poids brut total</strong> – 228 kg</li>
  <li><strong>Vibration volant max</strong> – 6,37 m/s²</li>
  <li><strong>Vibration siège max</strong> – 1,06 m/s²</li>
  <li><strong>Niveau sonore</strong> – 100 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lame à neige Standard Plus 110 – avec châssis</h3>
<p class="mb-3">La lame possède un mécanisme de sécurité à bascule. En cas d'obstacle (ex. bouche d'égout), la sécurité se déclenche et la lame bascule hors de la zone de danger sans effort.</p>
<p class="mb-3">Largeur : 1,10 m (110 cm), hauteur : env. 0,40 m (40 cm). Livrée avec une bande caoutchouc. Les 2 patins réglables protègent la lame des obstacles.</p>

<h4 class="font-semibold mb-2">Avantages de la lame :</h4>
<ul class="space-y-1 mb-3">
  <li>Partie mobile bascule en cas de forte contrainte ou d'obstacle fixe</li>
  <li>Tension des ressorts réglable selon les besoins</li>
  <li>Lame relevable depuis le siège conducteur</li>
  <li>Lame orientable latéralement en 5 positions</li>
</ul>

<h4 class="font-semibold mb-2">Données techniques lame :</h4>
<ul class="space-y-1 mb-3">
  <li>Lame en acier laqué avec ressort de sécurité</li>
  <li>Châssis de montage avec relevage</li>
  <li>Leviers de réglage latéral et de relevage</li>
  <li>Bande caoutchouc</li>
  <li>2 patins</li>
  <li>Matériel de montage</li>
  <li>Inclus : 2 chaînes à neige 18×8.50-8</li>
</ul>

<p><strong>Alimentation :</strong> Essence | <strong>Largeur de coupe :</strong> 84 cm | <strong>Transmission :</strong> Hydrostatique | <strong>Moteur :</strong> 1 cylindre | <strong>Traction :</strong> Arrière</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Black Edition PRO 165/84 H Lawn Tractor with Snow Blade 110 Plus – Model 2023</h2>

<p class="mb-3"><strong>Black Edition® PRO 165/84 Hydrostat – Winter Package 110 Plus incl. Mulching Kit</strong></p>

<p class="mb-3">Compact lawn tractor with STIGA ST 450 engine, 84 cm cutting deck with two blades and 240 litre rear grass collector. Mowing in reverse possible!</p>

<p class="mb-3">The new Black Edition® 165/84 H lawn tractor features a modern design suitable for all users. The STIGA petrol engine delivers 10.5 kW at 3600 rpm. The mower is equipped with a pedal-controlled hydrostatic transmission for smooth speed control without gear changes. The 84 cm cutting deck offers 7 cutting heights between 25 and 80 mm. The convenient electromagnetic blade clutch is operated at the touch of a button. The rear grass collector has a 240 litre capacity. The STIGA Multiclip mulching kit is included.</p>

<p class="mb-3">The raised 3-spoke steering wheel and padded high-back seat ensure ergonomic, comfortable driving.</p>

<h3 class="font-semibold mb-2 mt-5">Set includes:</h3>
<ul class="space-y-1 mb-3">
  <li>Black Edition® Lawn Tractor PRO 165/84 H</li>
  <li>Snow Blade Standard Plus 110</li>
  <li>Mounting frame for snow blade</li>
  <li>Standard PLUS adjustment lever</li>
  <li>Snow chains 18×8.50-8 (pair)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Black Edition® Series Features</h3>
<ul class="space-y-1 mb-3">
  <li>Comfort high-back seat standard</li>
  <li>Front bumper standard</li>
  <li>Deck wash nozzles standard</li>
  <li>Hydrostatic transmission standard</li>
  <li>Extra-wide front wheels</li>
  <li>Mulching kit included</li>
  <li>Large 240 l collector with release lever from seat</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Product Advantages:</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Front bumper</strong> – protects the tractor from front damage</li>
  <li><strong>Electric blade engagement</strong> – convenient deck activation via switch</li>
  <li><strong>Pedal-controlled hydrostatic transmission</strong> – smooth forward and reverse speed control</li>
  <li><strong>Open step-through with storage compartment</strong> – easy entry and exit</li>
  <li><strong>Greaseable pendulum front axle</strong> – good balance and outstanding comfort</li>
  <li><strong>Fill level indicator</strong> – signals when the collector is full</li>
  <li><strong>Dual headlights</strong> – easier work in the dark</li>
  <li><strong>Fender-mounted height adjustment</strong> – spring-assisted deck for easier adjustment</li>
  <li><strong>Pendulum-mounted cutting deck</strong> – optimal ground adaption, prevents scalping</li>
  <li><strong>2 water hose connections</strong> – easy deck cleaning</li>
  <li><strong>Compact design</strong> – easy to manoeuvre, less storage space needed</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data – Lawn Tractor</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine manufacturer</strong> – STIGA ST 450 OHV</li>
  <li><strong>Displacement</strong> – 432 cc</li>
  <li><strong>Rated power</strong> – 6.8 kW @ 2.400 rpm</li>
  <li><strong>Engine power</strong> – 10.5 kW @ 3600 rpm</li>
  <li><strong>Cutting width</strong> – 84 cm</li>
  <li><strong>Cutting system</strong> – MPS84H</li>
  <li><strong>Discharge</strong> – Rear discharge</li>
  <li><strong>Blade type</strong> – Two collector blades</li>
  <li><strong>Transmission</strong> – Hydrostatic</li>
  <li><strong>Cutting heights</strong> – 7 positions, 28 – 80 mm</li>
  <li><strong>Blade engagement</strong> – Electromagnetic clutch</li>
  <li><strong>Grass collector volume</strong> – 240 l</li>
  <li><strong>Fuel tank capacity</strong> – 6.0 l</li>
  <li><strong>Wheel size</strong> – 15″-18″</li>
  <li><strong>Headlights</strong> – Dual headlights</li>
  <li><strong>Mulching kit</strong> – Multiclip blades + plug: yes</li>
  <li><strong>Net weight</strong> – 160 kg</li>
  <li><strong>Gross weight</strong> – 192.3 kg</li>
  <li><strong>Front wheel diameter</strong> – 15×5.00-6</li>
  <li><strong>Rear wheel diameter</strong> – 18×6.50-8</li>
  <li><strong>Min. turning radius</strong> – 180 cm</li>
  <li><strong>Dimensions (L×W×H)</strong> – 2338 × 880 × 1100 mm</li>
  <li><strong>Package dimensions (L×W×H)</strong> – 1700 × 1120 × 837 mm</li>
  <li><strong>Unladen weight</strong> – 181 kg</li>
  <li><strong>Total gross weight</strong> – 228 kg</li>
  <li><strong>Max. vibration steering wheel</strong> – 6.37 m/s²</li>
  <li><strong>Max. vibration seat</strong> – 1.06 m/s²</li>
  <li><strong>Noise level</strong> – 100 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Snow Blade Standard Plus 110 – with Mounting Frame</h3>
<p class="mb-3">The snow blade features a safety flip mechanism. When hitting an obstacle (e.g. a manhole cover), the overload protection triggers and the blade flips out of the danger area effortlessly.</p>
<p class="mb-3">Width: 1.10 m (110 cm), height: approx. 0.40 m (40 cm). Supplied with a rubber strip. The 2 adjustable skid shoes protect the blade from obstacles.</p>

<h4 class="font-semibold mb-2">Blade Advantages:</h4>
<ul class="space-y-1 mb-3">
  <li>Moving part flips away under heavy load or fixed obstacles</li>
  <li>Tension springs adjustable as needed</li>
  <li>Blade can be raised from the driver's seat</li>
  <li>Blade pivotable sideways in 5 positions</li>
</ul>

<h4 class="font-semibold mb-2">Technical Data – Snow Blade:</h4>
<ul class="space-y-1 mb-3">
  <li>Painted steel snow blade with safety spring flap</li>
  <li>Mounting frame with lift</li>
  <li>Control levers for lateral adjustment and lift</li>
  <li>Rubber scraper strip</li>
  <li>2 skid shoes</li>
  <li>Tractor mounting hardware</li>
  <li>Includes: 2 snow chains 18×8.50-8</li>
</ul>

<p><strong>Power source:</strong> Petrol | <strong>Cutting width:</strong> 84 cm | <strong>Transmission:</strong> Hydrostatic | <strong>Engine:</strong> 1 cylinder | <strong>Drive:</strong> Rear wheel drive</p>`,
    price_eur: 2009.00,
    image_url: "/16-1.jpg",
    gallery: ["/16-1.jpg", "/16-2.jpg", "/16-3.jpg", "/16-4.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-27T10:00:00Z",
  },
  {
    id: "prod-17",
    slug: "castelgarden-xd-150-hd-modell-2023",
    category_id: "cat-2",
    name_de: "Castelgarden XD 150 HD – Modell 2023",
    name_fr: "Castelgarden XD 150 HD – Modèle 2023",
    name_en: "Castelgarden XD 150 HD – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Castelgarden XD 150 HD – Modell 2023</h2>

<p class="mb-3">Rasentraktor XD 150 HD mit Hydrostatgetriebe, Anti-Scalp-Rädern, ergonomischem Sitz und Lenkrad. Zum Mähen großer Mengen von hohem oder wildem Gras und dessen seitlichen Auswurf geeignet. Mulch-Kit und Ladegerät sind separat erhältlich.</p>

<p class="mb-3"><strong>Hinweis:</strong> Lieferung direkt vom Hersteller. Kein Lagerartikel! Abweichende Lieferzeit. Lieferung frachtfrei. Artikel ist von der Rücknahme ausgeschlossen!</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Castelgarden</li>
  <li><strong>Motorbezeichnung</strong> – ST 400</li>
  <li><strong>Anzahl Zylinder</strong> – 1</li>
  <li><strong>Hubraum</strong> – 414 cm³</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Motorleistung</strong> – 9,2 kW / 12,5 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 7,1 kW / 9,7 PS bei 2800 U/min</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Max. Geschwindigkeit</strong> – 9,7 km/h</li>
  <li><strong>Kraftstofftank</strong> – 6 Liter</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Lenkungsmechanismus</strong> – Vorderrad-Lenkung</li>
  <li><strong>Reifengröße hinten</strong> – 18×8,50-8″</li>
  <li><strong>Reifengröße vorne</strong> – 15×6,00-6″</li>
  <li><strong>Reifenprofil</strong> – Rasenprofil</li>
  <li><strong>Verstellbares Lenkrad</strong> – Nein</li>
  <li><strong>Vorderachse pendelnd</strong> – Ja</li>
  <li><strong>Material Achse</strong> – Vorne und hinten: Stahl</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Sitz</strong> – Stiga Klassiker</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 173 × 120 × 110 cm</li>
  <li><strong>Geräuschpegel garantiert</strong> – 100 dB</li>
  <li><strong>Vibration am Sitz</strong> – 0,94 m/s²</li>
  <li><strong>Vibration am Lenkrad</strong> – 3,33 m/s²</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Castelgarden XD 150 HD – Modèle 2023</h2>

<p class="mb-3">Tracteur tondeuse XD 150 HD avec transmission hydrostatique, roues anti-scalp, siège et volant ergonomiques. Conçu pour tondre de grandes quantités d'herbe haute ou sauvage avec évacuation latérale. Kit mulching et chargeur vendus séparément.</p>

<p class="mb-3"><strong>Remarque :</strong> Livraison directe depuis le fabricant. Pas un article en stock ! Délai de livraison différent. Livraison franco. Article exclu du droit de retour !</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Castelgarden</li>
  <li><strong>Désignation moteur</strong> – ST 400</li>
  <li><strong>Nombre de cylindres</strong> – 1</li>
  <li><strong>Cylindrée</strong> – 414 cm³</li>
  <li><strong>Refroidissement</strong> – Air</li>
  <li><strong>Carburant</strong> – Essence</li>
  <li><strong>Puissance moteur</strong> – 9,2 kW / 12,5 ch à 3600 tr/min</li>
  <li><strong>Puissance nominale</strong> – 7,1 kW / 9,7 ch à 2800 tr/min</li>
  <li><strong>Transmission</strong> – Hydrostatique</li>
  <li><strong>Vitesse max.</strong> – 9,7 km/h</li>
  <li><strong>Réservoir</strong> – 6 litres</li>
  <li><strong>Traction</strong> – Arrière</li>
  <li><strong>Démarrage électrique</strong> – Oui</li>
  <li><strong>Direction</strong> – Roues avant</li>
  <li><strong>Taille pneus arrière</strong> – 18×8,50-8″</li>
  <li><strong>Taille pneus avant</strong> – 15×6,00-6″</li>
  <li><strong>Profil pneus</strong> – Profil pelouse</li>
  <li><strong>Volant réglable</strong> – Non</li>
  <li><strong>Essieu avant pendulaire</strong> – Oui</li>
  <li><strong>Matériau essieu</strong> – Avant et arrière : acier</li>
  <li><strong>Tension bord</strong> – 12 V</li>
  <li><strong>Siège</strong> – Stiga classique</li>
  <li><strong>Dimensions (L×l×H)</strong> – 173 × 120 × 110 cm</li>
  <li><strong>Niveau sonore garanti</strong> – 100 dB</li>
  <li><strong>Vibration au siège</strong> – 0,94 m/s²</li>
  <li><strong>Vibration au volant</strong> – 3,33 m/s²</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Castelgarden XD 150 HD – Model 2023</h2>

<p class="mb-3">Lawn tractor XD 150 HD with hydrostatic transmission, anti-scalp wheels, ergonomic seat and steering wheel. Suitable for mowing large amounts of tall or wild grass with side discharge. Mulching kit and charger sold separately.</p>

<p class="mb-3"><strong>Note:</strong> Direct delivery from manufacturer. Not a stock item! Different delivery time. Free freight. Item excluded from return!</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Castelgarden</li>
  <li><strong>Engine model</strong> – ST 400</li>
  <li><strong>Number of cylinders</strong> – 1</li>
  <li><strong>Displacement</strong> – 414 cm³</li>
  <li><strong>Cooling system</strong> – Air-cooled</li>
  <li><strong>Fuel</strong> – Petrol</li>
  <li><strong>Engine power</strong> – 9.2 kW / 12.5 hp at 3600 rpm</li>
  <li><strong>Rated power</strong> – 7.1 kW / 9.7 hp at 2800 rpm</li>
  <li><strong>Transmission</strong> – Hydrostatic</li>
  <li><strong>Max. speed</strong> – 9.7 km/h</li>
  <li><strong>Fuel tank</strong> – 6 litres</li>
  <li><strong>Drive</strong> – Rear wheel drive</li>
  <li><strong>Electric start</strong> – Yes</li>
  <li><strong>Steering</strong> – Front wheel steering</li>
  <li><strong>Rear tyre size</strong> – 18×8.50-8″</li>
  <li><strong>Front tyre size</strong> – 15×6.00-6″</li>
  <li><strong>Tyre tread</strong> – Lawn tread</li>
  <li><strong>Adjustable steering wheel</strong> – No</li>
  <li><strong>Pendulum front axle</strong> – Yes</li>
  <li><strong>Axle material</strong> – Front and rear: steel</li>
  <li><strong>On-board voltage</strong> – 12 V</li>
  <li><strong>Seat</strong> – Stiga classic</li>
  <li><strong>Dimensions (L×W×H)</strong> – 173 × 120 × 110 cm</li>
  <li><strong>Guaranteed noise level</strong> – 100 dB</li>
  <li><strong>Vibration at seat</strong> – 0.94 m/s²</li>
  <li><strong>Vibration at steering wheel</strong> – 3.33 m/s²</li>
</ul>`,
    price_eur: 1585.00,
    image_url: "/17.webp",
    gallery: ["/17.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-28T10:00:00Z",
  },
  {
    id: "prod-18",
    slug: "castelgarden-xdc-150-hd-modell-2023",
    category_id: "cat-2",
    name_de: "Castelgarden XDC 150 HD – Modell 2023",
    name_fr: "Castelgarden XDC 150 HD – Modèle 2023",
    name_en: "Castelgarden XDC 150 HD – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Castelgarden XDC 150 HD – Modell 2023</h2>

<p class="mb-3">Der Castelgarden XDC 150 HD ist ein Aufsitzmäher, der von einem Einzylindermotor mit einer Nettoleistung von 6,3 kW bei 2400 U/min angetrieben wird. Der Mäher ist mit einem hydrostatischen Getriebe ausgestattet, das eine konstante Vorwärtsgeschwindigkeitsregelung ermöglicht, ohne die Gänge wechseln zu müssen. Das 84 cm Mähdeck verfügt über zwei Messer und 7 Schnitthöheneinstellungen (von 25 bis 80 mm) und einer elektromagnetischen Messerkupplung. Der XDC 150 HD verfügt über einen 240 Liter Grasfangkorb, einen ergonomisch geformten Sitz, ein LED-Armaturenbrett und Scheinwerfer. Ladegerät inklusive. Dieser Mäher kann mit einem optionalen Mulch-Kit so eingestellt werden, dass Grasschnitt gemulcht wird.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Art der Übertragung</strong> – Hydrostatik</li>
  <li><strong>ABC</strong> – 2302MG</li>
  <li><strong>Empfohlene Fläche</strong> – 3500 m²</li>
  <li><strong>Marke des Motors</strong> – STIGA</li>
  <li><strong>Schnitttyp</strong> – Sammlung</li>
  <li><strong>Automarke</strong> – Castelgarden</li>
  <li><strong>Startertyp</strong> – Schlüssel</li>
  <li><strong>Regelung Höhe des Schnitts</strong> – Manuell</li>
  <li><strong>Energiequelle</strong> – Benzin</li>
  <li><strong>Schnittbreite</strong> – 84 cm</li>
  <li><strong>Fassungsvermögen Fangkorb</strong> – 240 l</li>
  <li><strong>Hubraum</strong> – 414 cm³</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Castelgarden XDC 150 HD – Modèle 2023</h2>

<p class="mb-3">Le Castelgarden XDC 150 HD est un tracteur tondeuse équipé d'un moteur monocylindre développant une puissance nette de 6,3 kW à 2400 tr/min. Il est doté d'une transmission hydrostatique permettant un contrôle constant de la vitesse avant sans changement de vitesse. Le plateau de coupe de 84 cm est équipé de deux lames avec 7 réglages de hauteur (25 à 80 mm) et un embrayage électromagnétique. Le XDC 150 HD dispose d'un bac de ramassage de 240 litres, d'un siège ergonomique, d'un tableau de bord à LED et de phares. Chargeur inclus. Cette tondeuse peut être équipée d'un kit mulching optionnel.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Type de transmission</strong> – Hydrostatique</li>
  <li><strong>ABC</strong> – 2302MG</li>
  <li><strong>Surface recommandée</strong> – 3500 m²</li>
  <li><strong>Marque du moteur</strong> – STIGA</li>
  <li><strong>Type de coupe</strong> – Ramassage</li>
  <li><strong>Marque</strong> – Castelgarden</li>
  <li><strong>Type de démarrage</strong> – Clé</li>
  <li><strong>Réglage hauteur de coupe</strong> – Manuel</li>
  <li><strong>Source d'énergie</strong> – Essence</li>
  <li><strong>Largeur de coupe</strong> – 84 cm</li>
  <li><strong>Capacité du bac</strong> – 240 l</li>
  <li><strong>Cylindrée</strong> – 414 cm³</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Castelgarden XDC 150 HD – Model 2023</h2>

<p class="mb-3">The Castelgarden XDC 150 HD is a ride-on mower powered by a single-cylinder engine with a net power output of 6.3 kW at 2400 rpm. It features a hydrostatic transmission for constant forward speed control without gear changes. The 84 cm cutting deck has two blades with 7 cutting height adjustments (25 to 80 mm) and an electromagnetic blade clutch. The XDC 150 HD comes with a 240 litre grass collector, ergonomic seat, LED dashboard and headlights. Charger included. This mower can be fitted with an optional mulching kit.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Transmission type</strong> – Hydrostatic</li>
  <li><strong>ABC</strong> – 2302MG</li>
  <li><strong>Recommended area</strong> – 3500 m²</li>
  <li><strong>Engine brand</strong> – STIGA</li>
  <li><strong>Cutting type</strong> – Collection</li>
  <li><strong>Brand</strong> – Castelgarden</li>
  <li><strong>Start type</strong> – Key</li>
  <li><strong>Cutting height adjustment</strong> – Manual</li>
  <li><strong>Power source</strong> – Petrol</li>
  <li><strong>Cutting width</strong> – 84 cm</li>
  <li><strong>Collector capacity</strong> – 240 l</li>
  <li><strong>Displacement</strong> – 414 cm³</li>
</ul>`,
    price_eur: 1707.00,
    image_url: "/18-1.webp",
    gallery: ["/18-1.webp", "/18-2.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-29T10:00:00Z",
  },
  {
    id: "prod-19",
    slug: "castelgarden-xe-966-hd-modell-2023-aufsitzmaher",
    category_id: "cat-2",
    name_de: "Castelgarden XE 966 HD – Modell 2023 Aufsitzmäher",
    name_fr: "Castelgarden XE 966 HD – Modèle 2023 Tracteur tondeuse",
    name_en: "Castelgarden XE 966 HD – Model 2023 Ride-on Mower",
    description_de: `<h2 class="text-lg font-semibold mb-3">Castelgarden XE 966 HD – Modell 2023 Aufsitzmäher</h2>

<p class="mb-3">Castelgarden XE 966 HD ist ein kompakter Aufsitzmäher ausgestattet mit einem STIGA-Benzinmotor mit einer Leistung von 3,6 kW bei 2450 U/min. Das hydrostatische Getriebe ermöglicht eine einfache Steuerung der Geschwindigkeit mit einem einfachen Druck auf das Pedal. Der XE 966 HD ist mit einem 150-Liter-Grasfangsack ausgestattet, ergonomischem Sitz und weichem Lenkrad, die einen guten Fahrkomfort garantieren. Die Klingen werden mittels eines bequemen Hebels aktiviert; die Schnitthöhe kann in 6 Positionen eingestellt werden, von 30 bis 76 mm. Batterieladegerät enthalten.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Stiga</li>
  <li><strong>Hubraum</strong> – 224 cm³</li>
  <li><strong>Motorbezeichnung</strong> – ST 250 ES</li>
  <li><strong>Anzahl Zylinder</strong> – 1</li>
  <li><strong>Geräteleistung</strong> – 3,6 kW / 4,9 PS bei 2450 U/min</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Kraftstofftank</strong> – 3,8 Liter</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Art der Motorschmierung</strong> – Tauchschmierung</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Max. Geschwindigkeit</strong> – 6,2 km/h</li>
  <li><strong>Reifengröße vorne</strong> – 13×5,00-6″</li>
  <li><strong>Reifengröße hinten</strong> – 15×5,50-6″</li>
  <li><strong>Reifenprofil</strong> – Rasenprofil</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Anzahl Messer</strong> – 1</li>
  <li><strong>Fangkorbentleerung</strong> – Manuell am Fangkorb-Heck</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 183 × 72,2 × 105 cm</li>
  <li><strong>Schalldruckpegel</strong> – 98 dB(A)</li>
  <li><strong>Vibration am Sitz</strong> – 2,94 m/s²</li>
  <li><strong>Vibration am Lenkrad</strong> – 7,76 m/s²</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Castelgarden XE 966 HD – Modèle 2023 Tracteur tondeuse</h2>

<p class="mb-3">Le Castelgarden XE 966 HD est un tracteur tondeuse compact équipé d'un moteur essence STIGA développant 3,6 kW à 2450 tr/min. La transmission hydrostatique permet un contrôle facile de la vitesse par simple pression sur la pédale. Le XE 966 HD est équipé d'un sac de ramassage de 150 litres, d'un siège ergonomique et d'un volant souple pour un bon confort de conduite. Les lames s'activent à l'aide d'un levier confortable ; la hauteur de coupe est réglable sur 6 positions de 30 à 76 mm. Chargeur de batterie inclus.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Stiga</li>
  <li><strong>Cylindrée</strong> – 224 cm³</li>
  <li><strong>Modèle moteur</strong> – ST 250 ES</li>
  <li><strong>Nombre de cylindres</strong> – 1</li>
  <li><strong>Puissance nominale</strong> – 3,6 kW / 4,9 ch à 2450 tr/min</li>
  <li><strong>Carburant</strong> – Essence</li>
  <li><strong>Démarrage électrique</strong> – Oui</li>
  <li><strong>Réservoir</strong> – 3,8 litres</li>
  <li><strong>Transmission</strong> – Hydrostatique</li>
  <li><strong>Refroidissement</strong> – Air</li>
  <li><strong>Lubrification moteur</strong> – Barbotage</li>
  <li><strong>Traction</strong> – Arrière</li>
  <li><strong>Vitesse max.</strong> – 6,2 km/h</li>
  <li><strong>Pneus avant</strong> – 13×5,00-6″</li>
  <li><strong>Pneus arrière</strong> – 15×5,50-6″</li>
  <li><strong>Profil pneus</strong> – Pelouse</li>
  <li><strong>Tension bord</strong> – 12 V</li>
  <li><strong>Nombre de lames</strong> – 1</li>
  <li><strong>Vidage du bac</strong> – Manuel à l'arrière</li>
  <li><strong>Dimensions (L×l×H)</strong> – 183 × 72,2 × 105 cm</li>
  <li><strong>Niveau sonore</strong> – 98 dB(A)</li>
  <li><strong>Vibration au siège</strong> – 2,94 m/s²</li>
  <li><strong>Vibration au volant</strong> – 7,76 m/s²</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Castelgarden XE 966 HD – Model 2023 Ride-on Mower</h2>

<p class="mb-3">The Castelgarden XE 966 HD is a compact ride-on mower powered by a STIGA petrol engine delivering 3.6 kW at 2450 rpm. The hydrostatic transmission allows easy speed control with a simple press of the pedal. The XE 966 HD is equipped with a 150-litre grass collection bag, ergonomic seat and soft steering wheel for good driving comfort. The blades are activated via a convenient lever; the cutting height can be adjusted to 6 positions from 30 to 76 mm. Battery charger included.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Stiga</li>
  <li><strong>Displacement</strong> – 224 cm³</li>
  <li><strong>Engine model</strong> – ST 250 ES</li>
  <li><strong>Number of cylinders</strong> – 1</li>
  <li><strong>Rated power</strong> – 3.6 kW / 4.9 hp at 2450 rpm</li>
  <li><strong>Fuel</strong> – Petrol</li>
  <li><strong>Electric start</strong> – Yes</li>
  <li><strong>Fuel tank</strong> – 3.8 litres</li>
  <li><strong>Transmission</strong> – Hydrostatic</li>
  <li><strong>Cooling</strong> – Air-cooled</li>
  <li><strong>Engine lubrication</strong> – Splash lubrication</li>
  <li><strong>Drive</strong> – Rear wheel drive</li>
  <li><strong>Max. speed</strong> – 6.2 km/h</li>
  <li><strong>Front tyres</strong> – 13×5.00-6″</li>
  <li><strong>Rear tyres</strong> – 15×5.50-6″</li>
  <li><strong>Tyre tread</strong> – Lawn</li>
  <li><strong>On-board voltage</strong> – 12 V</li>
  <li><strong>Number of blades</strong> – 1</li>
  <li><strong>Bag emptying</strong> – Manual at rear</li>
  <li><strong>Dimensions (L×W×H)</strong> – 183 × 72.2 × 105 cm</li>
  <li><strong>Noise level</strong> – 98 dB(A)</li>
  <li><strong>Vibration at seat</strong> – 2.94 m/s²</li>
  <li><strong>Vibration at steering wheel</strong> – 7.76 m/s²</li>
</ul>`,
    price_eur: 1387.00,
    image_url: "/19-1.webp",
    gallery: ["/19-1.webp", "/19-2.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-05-30T10:00:00Z",
  },
  {
    id: "prod-20",
    slug: "honda-hf-2317-hm-mit-winterpaket-120-plus-honda-deflektor-dcgkv1",
    category_id: "cat-2",
    name_de: "Honda HF 2317 HM mit Winterpaket 120 Plus & Honda Deflektor DCGKV1",
    name_fr: "Honda HF 2317 HM avec Pack Hiver 120 Plus & Déflecteur Honda DCGKV1",
    name_en: "Honda HF 2317 HM with Winter Package 120 Plus & Honda Deflector DCGKV1",
    description_de: `<h2 class="text-lg font-semibold mb-3">Honda HF 2317 HM Rasentraktor mit Winterpaket 120 Plus & Honda Deflektor DCGKV1</h2>

<p class="mb-3">Der Honda Rasentraktor HF2317 HM erhält eine Auffrischung mit neuen Motoren in Form des GCV 530 sowie einer breiten Palette neuer Funktionen für mehr Komfort und Bequemlichkeit. Zu den neuesten Innovationen zählen ein Farbdisplay und ein neuer Komfortsitz.</p>

<p class="mb-3"><strong>Winterpaket 120 Plus:</strong> Schneeschild, Verstellhebel, Anbaurahmen</p>

<p class="mb-3">Schnittbreite: 92 cm | Motor: 2 Zylinder Honda GCV 530 | Fangsystem: 280 Liter | Getriebe: Hydrostat | Mulchsystem optional | Frontstoßstange</p>

<h3 class="font-semibold mb-2 mt-5">Produkt Vorteile:</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Optiflow:</strong> Ein Lüfterradsystem optimiert den Luftstrom zwischen Mähdeck und Grasfangsack und steigert die Fangleistung erheblich.</li>
  <li><strong>Synchron laufende Messer:</strong> Die Messer stehen konstant im 90°-Winkel zueinander für vollkommen konstante Schnittleistung.</li>
  <li><strong>Komfort und Fangeigenschaften:</strong> Beste Fangeigenschaften für bis zu 7.500 m² empfohlen.</li>
  <li><strong>Vielseitiger Gartentraktor:</strong> Dank großem Zubehör-Programm auch zum Kehren, Schneeräumen oder als Zugfahrzeug nutzbar.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motor</strong> – 4-Takt OHC V-2</li>
  <li><strong>Hubraum</strong> – 530 cm³</li>
  <li><strong>Motortyp</strong> – GCV 530</li>
  <li><strong>Nennleistung</strong> – 11,3 kW / 15,5 PS</li>
  <li><strong>Tankvolumen</strong> – 5,4 Liter</li>
  <li><strong>Motorölvolumen</strong> – 1,15 Liter</li>
  <li><strong>Getriebe</strong> – Stufenloser Hydrostat</li>
  <li><strong>Geschwindigkeit</strong> – 0 bis 8,2 km/h</li>
  <li><strong>Komfort-Messerkupplung</strong> – Elektromagnetisch</li>
  <li><strong>Optiflow®</strong> – Ja</li>
  <li><strong>Grasfangsack-Entleerung</strong> – Manuell</li>
  <li><strong>Schnittpositionen</strong> – 7</li>
  <li><strong>Schallpegel LWA</strong> – 100 dB(A)</li>
  <li><strong>Mulchsatz</strong> – Optional</li>
  <li><strong>Deflektor</strong> – Optional</li>
  <li><strong>Anhängerkupplung</strong> – Optional</li>
  <li><strong>Länge</strong> – 2480 mm</li>
  <li><strong>Breite</strong> – 960 mm</li>
  <li><strong>Höhe</strong> – 1110 mm</li>
  <li><strong>Leergewicht</strong> – 228 kg</li>
  <li><strong>Schnittbreite</strong> – 92 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Synchron / asynchron</strong> – Synchron</li>
  <li><strong>Schnitthöhenbereich</strong> – 30 – 80 mm</li>
  <li><strong>Grasfangsackvolumen</strong> – 280 Liter</li>
  <li><strong>Bereifung vorne</strong> – 13 x 5.00-6</li>
  <li><strong>Bereifung hinten</strong> – 18 x 8,50 – 8</li>
  <li><strong>Wendekreis</strong> – 1,8 m</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Schneeschild Standard Plus 120 – mit Anbaurahmen</h3>
<p class="mb-3">Das Sicherheitsschneeschild 120 Plus mit Sicherheitsklappenmechanismus. Breite: 1,20 m (120 cm), Höhe: ca. 0,50 m (50 cm). Wird serienmäßig mit einer Gummileiste ausgeliefert. Die 2 einstellbaren Gleitspitzen unterstützen die Stahl-Gummileiste vor Hindernissen.</p>

<ul class="space-y-1 mb-3">
  <li>Der bewegliche Teil des Schneeschildes klappt weg bei starker Beanspruchung oder festen Hindernissen</li>
  <li>Spannkraft der Zugfedern kann je nach Bedarf verstellt werden</li>
  <li>Schneeschild kann vom Fahrersitz aus angehoben werden</li>
  <li>Seitlich schwenkbar in 5 Positionen (Verstellung direkt manuell am Schneeschild)</li>
</ul>

<h4 class="font-semibold mb-2">Technische Daten Schneeschild:</h4>
<ul class="space-y-1 mb-3">
  <li>5-fach Seitenverstellung per Hebel</li>
  <li>Federunterstütztes Klappschild</li>
  <li>Inkl. Stahl- und Gummischürfleiste</li>
  <li>Inkl. 2 Gleitspitzen</li>
  <li>Inkl. Montagezubehör</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Honda Deflektor DCGKV1 (80609-VK1-003)</h3>
<p class="mb-3">Der Heckdeflektor eignet sich ideal zur Verwendung des Traktors im Heckauswurfmodus ohne den Fangkorb.</p>

<p class="mb-3"><strong>Passend für:</strong> Honda HF 2315, HF 2417, HF 2620</p>

<ul class="space-y-1 mb-3">
  <li><strong>Gewicht inkl. Verpackung</strong> – 5 kg</li>
  <li><strong>Länge</strong> – 730 mm</li>
  <li><strong>Breite</strong> – 405 mm</li>
  <li><strong>Höhe</strong> – 511 mm</li>
  <li><strong>Nettogewicht</strong> – 2,7 kg</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Honda HF 2317 HM Tracteur tondeuse avec Pack Hiver 120 Plus & Déflecteur Honda DCGKV1</h2>

<p class="mb-3">Le tracteur tondeuse Honda HF2317 HM bénéficie d'une mise à jour avec les nouveaux moteurs GCV 530 ainsi que d'une large gamme de nouvelles fonctions pour plus de confort et de commodité, notamment un écran couleur et un nouveau siège confort.</p>

<p class="mb-3"><strong>Pack Hiver 120 Plus :</strong> Lame à neige, levier de réglage, châssis de montage</p>

<p class="mb-3">Largeur de coupe : 92 cm | Moteur : 2 cylindres Honda GCV 530 | Bac de ramassage : 280 litres | Transmission : Hydrostatique | Kit mulching en option | Pare-chocs avant</p>

<h3 class="font-semibold mb-2 mt-5">Avantages du produit :</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Optiflow :</strong> Système de turbine optimisant le flux d'air entre le plateau et le bac pour des performances de ramassage accrues.</li>
  <li><strong>Lames synchronisées :</strong> Les lames maintiennent un angle constant de 90° pour une qualité de coupe parfaitement constante.</li>
  <li><strong>Confort et ramassage :</strong> Meilleures performances de ramassage pour jusqu'à 7 500 m² recommandés.</li>
  <li><strong>Tracteur polyvalent :</strong> Grâce à une large gamme d'accessoires, utilisable pour balayer, déneiger ou comme véhicule de traction.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – 4 temps OHC V-2</li>
  <li><strong>Cylindrée</strong> – 530 cm³</li>
  <li><strong>Type moteur</strong> – GCV 530</li>
  <li><strong>Puissance nominale</strong> – 11,3 kW / 15,5 ch</li>
  <li><strong>Réservoir</strong> – 5,4 litres</li>
  <li><strong>Huile moteur</strong> – 1,15 litre</li>
  <li><strong>Transmission</strong> – Hydrostatique continue</li>
  <li><strong>Vitesse</strong> – 0 à 8,2 km/h</li>
  <li><strong>Embrayage lames</strong> – Électromagnétique</li>
  <li><strong>Optiflow®</strong> – Oui</li>
  <li><strong>Vidage du bac</strong> – Manuel</li>
  <li><strong>Positions de coupe</strong> – 7</li>
  <li><strong>Niveau sonore LWA</strong> – 100 dB(A)</li>
  <li><strong>Kit mulching</strong> – En option</li>
  <li><strong>Déflecteur</strong> – En option</li>
  <li><strong>Attelage</strong> – En option</li>
  <li><strong>Longueur</strong> – 2480 mm</li>
  <li><strong>Largeur</strong> – 960 mm</li>
  <li><strong>Hauteur</strong> – 1110 mm</li>
  <li><strong>Poids à vide</strong> – 228 kg</li>
  <li><strong>Largeur de coupe</strong> – 92 cm</li>
  <li><strong>Nombre de lames</strong> – 2</li>
  <li><strong>Synchronisation</strong> – Synchrone</li>
  <li><strong>Plage de hauteur de coupe</strong> – 30 – 80 mm</li>
  <li><strong>Volume du bac</strong> – 280 litres</li>
  <li><strong>Pneus avant</strong> – 13 x 5.00-6</li>
  <li><strong>Pneus arrière</strong> – 18 x 8,50 – 8</li>
  <li><strong>Rayon de braquage</strong> – 1,8 m</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lame à neige Standard Plus 120 – avec châssis</h3>
<p class="mb-3">Lame de sécurité 120 Plus avec mécanisme à bascule. Largeur : 1,20 m (120 cm), hauteur : env. 0,50 m (50 cm). Livrée avec une bande caoutchouc. Les 2 patins réglables protègent la lame.</p>

<ul class="space-y-1 mb-3">
  <li>La partie mobile bascule en cas de forte contrainte ou d'obstacle fixe</li>
  <li>Tension des ressorts réglable</li>
  <li>Lame relevable depuis le siège conducteur</li>
  <li>Orientation latérale en 5 positions (réglage manuel direct sur la lame)</li>
</ul>

<h4 class="font-semibold mb-2">Données techniques lame :</h4>
<ul class="space-y-1 mb-3">
  <li>Réglage latéral 5 positions par levier</li>
  <li>Lame basculante à ressort</li>
  <li>Inclut bande caoutchouc et bande acier</li>
  <li>Inclut 2 patins</li>
  <li>Inclut accessoires de montage</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Déflecteur Honda DCGKV1 (80609-VK1-003)</h3>
<p class="mb-3">Le déflecteur arrière est idéal pour utiliser le tracteur en mode éjection arrière sans le bac.</p>

<p class="mb-3"><strong>Compatible :</strong> Honda HF 2315, HF 2417, HF 2620</p>

<ul class="space-y-1 mb-3">
  <li><strong>Poids avec emballage</strong> – 5 kg</li>
  <li><strong>Longueur</strong> – 730 mm</li>
  <li><strong>Largeur</strong> – 405 mm</li>
  <li><strong>Hauteur</strong> – 511 mm</li>
  <li><strong>Poids net</strong> – 2,7 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Honda HF 2317 HM Lawn Tractor with Winter Package 120 Plus & Honda Deflector DCGKV1</h2>

<p class="mb-3">The Honda HF2317 HM lawn tractor gets a refresh with new GCV 530 engines and a wide range of new features for increased comfort and convenience, including a colour display and a new comfort seat.</p>

<p class="mb-3"><strong>Winter Package 120 Plus:</strong> Snow blade, adjustment lever, mounting frame</p>

<p class="mb-3">Cutting width: 92 cm | Engine: 2-cylinder Honda GCV 530 | Collection system: 280 litres | Transmission: Hydrostatic | Mulching kit optional | Front bumper</p>

<h3 class="font-semibold mb-2 mt-5">Product Advantages:</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Optiflow:</strong> Fan system optimises airflow between deck and grass bag for significantly improved collection performance.</li>
  <li><strong>Synchronised blades:</strong> Blades maintain a constant 90° angle for consistently perfect cutting performance.</li>
  <li><strong>Comfort and collection:</strong> Best-in-class collection performance for lawns up to 7,500 m² recommended.</li>
  <li><strong>Versatile garden tractor:</strong> Thanks to a wide accessory range, can be used for sweeping, snow clearing or as a tow vehicle.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – 4-stroke OHC V-2</li>
  <li><strong>Displacement</strong> – 530 cm³</li>
  <li><strong>Engine type</strong> – GCV 530</li>
  <li><strong>Rated power</strong> – 11.3 kW / 15.5 hp</li>
  <li><strong>Fuel tank</strong> – 5.4 litres</li>
  <li><strong>Engine oil volume</strong> – 1.15 litres</li>
  <li><strong>Transmission</strong> – Continuous hydrostatic</li>
  <li><strong>Speed</strong> – 0 to 8.2 km/h</li>
  <li><strong>Blade clutch</strong> – Electromagnetic</li>
  <li><strong>Optiflow®</strong> – Yes</li>
  <li><strong>Grass bag emptying</strong> – Manual</li>
  <li><strong>Cutting positions</strong> – 7</li>
  <li><strong>Noise level LWA</strong> – 100 dB(A)</li>
  <li><strong>Mulching kit</strong> – Optional</li>
  <li><strong>Deflector</strong> – Optional</li>
  <li><strong>Trailer hitch</strong> – Optional</li>
  <li><strong>Length</strong> – 2480 mm</li>
  <li><strong>Width</strong> – 960 mm</li>
  <li><strong>Height</strong> – 1110 mm</li>
  <li><strong>Unladen weight</strong> – 228 kg</li>
  <li><strong>Cutting width</strong> – 92 cm</li>
  <li><strong>Number of blades</strong> – 2</li>
  <li><strong>Synchronisation</strong> – Synchronous</li>
  <li><strong>Cutting height range</strong> – 30 – 80 mm</li>
  <li><strong>Grass bag volume</strong> – 280 litres</li>
  <li><strong>Front tyres</strong> – 13 x 5.00-6</li>
  <li><strong>Rear tyres</strong> – 18 x 8.50 – 8</li>
  <li><strong>Turning circle</strong> – 1.8 m</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Snow Blade Standard Plus 120 – with Mounting Frame</h3>
<p class="mb-3">Safety snow blade 120 Plus with flip mechanism. Width: 1.20 m (120 cm), height: approx. 0.50 m (50 cm). Supplied with rubber strip. The 2 adjustable skid shoes protect the blade.</p>

<ul class="space-y-1 mb-3">
  <li>Moving part flips away under heavy load or fixed obstacles</li>
  <li>Tension springs adjustable as needed</li>
  <li>Blade can be raised from the driver's seat</li>
  <li>Sideways pivoting in 5 positions (manual adjustment directly on the blade)</li>
</ul>

<h4 class="font-semibold mb-2">Technical Data Blade:</h4>
<ul class="space-y-1 mb-3">
  <li>5-position lateral adjustment via lever</li>
  <li>Spring-assisted flip blade</li>
  <li>Includes steel and rubber scraper strip</li>
  <li>Includes 2 skid shoes</li>
  <li>Includes mounting hardware</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Honda Deflector DCGKV1 (80609-VK1-003)</h3>
<p class="mb-3">The rear deflector is ideal for using the tractor in rear discharge mode without the collector.</p>

<p class="mb-3"><strong>Compatible with:</strong> Honda HF 2315, HF 2417, HF 2620</p>

<ul class="space-y-1 mb-3">
  <li><strong>Weight incl. packaging</strong> – 5 kg</li>
  <li><strong>Length</strong> – 730 mm</li>
  <li><strong>Width</strong> – 405 mm</li>
  <li><strong>Height</strong> – 511 mm</li>
  <li><strong>Net weight</strong> – 2.7 kg</li>
</ul>`,
    price_eur: 3114.00,
    image_url: "/20-1.jpg",
    gallery: ["/20-1.jpg", "/20-2.jpg", "/20-3.jpg", "/20-4.jpg", "/20-5.png"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-01T10:00:00Z",
  },
  {
    id: "prod-21",
    slug: "honda-rasentraktor-hf-2417k5-hm-modell-2023",
    category_id: "cat-2",
    name_de: "Honda Rasentraktor HF 2417K5 HM – Modell 2023",
    name_fr: "Honda Tracteur tondeuse HF 2417K5 HM – Modèle 2023",
    name_en: "Honda Lawn Tractor HF 2417K5 HM – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Honda Rasentraktor HF 2417K5 HM – Modell 2023</h2>

<p class="mb-3">102 cm Schnittbreite • Motor: 17 PS / 12,5 kW • Laufruhiger Honda 2-Zylinder Motor • Versamow-Mulch-Technik</p>

<h3 class="font-semibold mb-2 mt-5">Motor & Ausstattung</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Honda</li>
  <li><strong>Motorbezeichnung</strong> – GCV 530</li>
  <li><strong>Motor</strong> – 4-Takt OHC Benzin-Motor, 90° V-Twin, vertikale Kurbelwelle</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Motorleistung</strong> – 12,5 kW / 17,0 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 9,7 kW / 13,2 PS bei 2800 U/min</li>
  <li><strong>Hubraum</strong> – 530 cm³</li>
  <li><strong>Kraftstofftank</strong> – 8,5 Liter</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Max. Geschwindigkeit</strong> – 8,2 km/h</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Geschwindigkeit rückwärts</strong> – 4,2 km/h</li>
  <li><strong>Kraftstofffüllstandsanzeige</strong> – Ja</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Reifengröße hinten</strong> – 18×8,50-8″</li>
  <li><strong>Reifengröße vorne</strong> – 13×5,00-6″</li>
  <li><strong>Reifenprofil</strong> – Rasenprofil</li>
  <li><strong>Wendekreis</strong> – 180 cm</li>
  <li><strong>Vorderachse pendelnd</strong> – Ja</li>
  <li><strong>Material Achse</strong> – Vorderachse aus Guss</li>
  <li><strong>Fahrtrichtungswahl</strong> – Fußpedalwippe mit getrennten Pedalen für vorwärts und rückwärts</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Mähdaten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Max. Fläche</strong> – 7500 m²</li>
  <li><strong>Schnittbreite</strong> – 102 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Schnitthöhen</strong> – 29–90 mm</li>
  <li><strong>Anzahl Schnitthöhen</strong> – 7</li>
  <li><strong>Schnitthöhenverstellung</strong> – Zentral</li>
  <li><strong>Volumen Fangkorb</strong> – 300 Liter</li>
  <li><strong>Mähmethoden</strong> – Fangen, Mulchen</li>
  <li><strong>Mulchkit</strong> – Honda Versamow™ selektiv</li>
  <li><strong>Heckauswurf-Schwadablage</strong> – Ja, Heckdeflektor optional erhältlich</li>
  <li><strong>Luftleitsystem</strong> – Honda Optiflow Luftstromsystem</li>
  <li><strong>Füllstandsanzeige</strong> – Akustisches Signal und Blinken der Kontrolllampe im Display</li>
  <li><strong>Mähwerkseinschaltung</strong> – Elektromagnetisch</li>
  <li><strong>Fangkorbentleerung</strong> – Manuell</li>
  <li><strong>Wasserschlauchanschluss</strong> – Ja</li>
  <li><strong>Anzahl Führungsräder Mähwerk</strong> – 4</li>
  <li><strong>Mähen im Rückwärtsgang</strong> – Ja, Sicherheitstaste am Armaturenbrett</li>
  <li><strong>Freigegeben für Hänge mit Steigung bis</strong> – 10° (17 %)</li>
  <li><strong>Antrieb Messerbalken</strong> – Synchron</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Komfort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Sitz</strong> – Komfortsitz, klappbar, hohe Rückenlehne, mit Wasserablauf</li>
  <li><strong>Sitzfederung</strong> – Parallelfederung</li>
  <li><strong>Sitzverstellung</strong> – Einhandhebel mit 6 Raststufen</li>
  <li><strong>Scheinwerfer</strong> – Ja</li>
  <li><strong>Zugöse</strong> – Als Zubehör erhältlich</li>
  <li><strong>Stoßfänger</strong> – Ja</li>
  <li><strong>Armaturenbrett</strong> – Ja, mit 7 LED, Betriebsstundenzähler, Voltmeter, farbiges LCD-Display</li>
  <li><strong>Batterieladegerät</strong> – Im Lieferumfang enthalten</li>
  <li><strong>Tempomat</strong> – Ja</li>
  <li><strong>USB-Steckdose</strong> – Ja</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Zündschlüssel – 2</li>
  <li>Bedienungsanleitung Gerät – 1</li>
  <li>Bedienungsanleitung Motor – 1</li>
  <li>Grasfangkorb – 1</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Umwelt, Maße und Gewicht</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Schalldruckpegel am Ohr der Bedienperson</strong> – 85 dB(A)</li>
  <li><strong>Länge</strong> – 246 cm</li>
  <li><strong>Breite</strong> – 106 cm</li>
  <li><strong>Höhe</strong> – 112 cm</li>
  <li><strong>Gewicht</strong> – 245 kg</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
  <li><strong>Vibration am Sitz</strong> – 0,8 m/s²</li>
  <li><strong>Vibration am Lenkrad</strong> – 3,3 m/s²</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Honda Tracteur tondeuse HF 2417K5 HM – Modèle 2023</h2>

<p class="mb-3">Largeur de coupe 102 cm • Moteur : 17 ch / 12,5 kW • Moteur 2 cylindres Honda silencieux • Technique de mulching Versamow</p>

<h3 class="font-semibold mb-2 mt-5">Moteur & Équipement</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Honda</li>
  <li><strong>Désignation moteur</strong> – GCV 530</li>
  <li><strong>Moteur</strong> – 4-temps OHC essence, 90° V-Twin, vilebrequin vertical</li>
  <li><strong>Carburant</strong> – Essence</li>
  <li><strong>Nombre de cylindres</strong> – 2</li>
  <li><strong>Refroidissement</strong> – Air</li>
  <li><strong>Puissance moteur</strong> – 12,5 kW / 17,0 ch à 3600 tr/min</li>
  <li><strong>Puissance nominale</strong> – 9,7 kW / 13,2 ch à 2800 tr/min</li>
  <li><strong>Cylindrée</strong> – 530 cm³</li>
  <li><strong>Réservoir</strong> – 8,5 litres</li>
  <li><strong>Transmission</strong> – Hydrostatique</li>
  <li><strong>Vitesse max.</strong> – 8,2 km/h</li>
  <li><strong>Traction</strong> – Arrière</li>
  <li><strong>Vitesse arrière</strong> – 4,2 km/h</li>
  <li><strong>Jauge de carburant</strong> – Oui</li>
  <li><strong>Démarrage électrique</strong> – Oui</li>
  <li><strong>Pneus arrière</strong> – 18×8,50-8″</li>
  <li><strong>Pneus avant</strong> – 13×5,00-6″</li>
  <li><strong>Profil pneus</strong> – Pelouse</li>
  <li><strong>Rayon de braquage</strong> – 180 cm</li>
  <li><strong>Essieu avant pendulaire</strong> – Oui</li>
  <li><strong>Matériau essieu</strong> – Essieu avant en fonte</li>
  <li><strong>Sélection de direction</strong> – Pédale avec pédales séparées avant/arrière</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données de tonte</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Surface max.</strong> – 7500 m²</li>
  <li><strong>Largeur de coupe</strong> – 102 cm</li>
  <li><strong>Nombre de lames</strong> – 2</li>
  <li><strong>Hauteurs de coupe</strong> – 29–90 mm</li>
  <li><strong>Nombre de hauteurs</strong> – 7</li>
  <li><strong>Réglage hauteur</strong> – Central</li>
  <li><strong>Volume du bac</strong> – 300 litres</li>
  <li><strong>Méthodes de tonte</strong> – Ramassage, mulching</li>
  <li><strong>Kit mulching</strong> – Honda Versamow™ sélectif</li>
  <li><strong>Éjection arrière</strong> – Oui, déflecteur arrière en option</li>
  <li><strong>Système de flux d'air</strong> – Honda Optiflow</li>
  <li><strong>Indicateur de remplissage</strong> – Signal sonore et témoin lumineux</li>
  <li><strong>Embrayage des lames</strong> – Électromagnétique</li>
  <li><strong>Vidage du bac</strong> – Manuel</li>
  <li><strong>Raccord d'eau</strong> – Oui</li>
  <li><strong>Nombre de roulettes</strong> – 4</li>
  <li><strong>Tonte en marche arrière</strong> – Oui, bouton de sécurité</li>
  <li><strong>Pente max. autorisée</strong> – 10° (17 %)</li>
  <li><strong>Entraînement des lames</strong> – Synchrone</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Confort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Siège</strong> – Siège confort pliable, dossier haut, drainage d'eau</li>
  <li><strong>Suspension du siège</strong> – Suspension parallèle</li>
  <li><strong>Réglage du siège</strong> – Levier à une main, 6 positions</li>
  <li><strong>Phares</strong> – Oui</li>
  <li><strong>Attelage</strong> – En option</li>
  <li><strong>Pare-chocs</strong> – Oui</li>
  <li><strong>Tableau de bord</strong> – 7 LED, compteur horaire, voltmètre, écran LCD couleur</li>
  <li><strong>Chargeur de batterie</strong> – Inclus</li>
  <li><strong>Régulateur de vitesse</strong> – Oui</li>
  <li><strong>Prise USB</strong> – Oui</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Contenu de la livraison</h3>
<ul class="space-y-1 mb-3">
  <li>Appareil de base – 1</li>
  <li>Clés de contact – 2</li>
  <li>Manuel d'utilisation – 1</li>
  <li>Manuel du moteur – 1</li>
  <li>Bac de ramassage – 1</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Environnement, dimensions et poids</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Pression acoustique à l'oreille</strong> – 85 dB(A)</li>
  <li><strong>Longueur</strong> – 246 cm</li>
  <li><strong>Largeur</strong> – 106 cm</li>
  <li><strong>Hauteur</strong> – 112 cm</li>
  <li><strong>Poids</strong> – 245 kg</li>
  <li><strong>Niveau de puissance acoustique garanti</strong> – 100 dB(A)</li>
  <li><strong>Vibration au siège</strong> – 0,8 m/s²</li>
  <li><strong>Vibration au volant</strong> – 3,3 m/s²</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Honda Lawn Tractor HF 2417K5 HM – Model 2023</h2>

<p class="mb-3">102 cm cutting width • Engine: 17 hp / 12.5 kW • Smooth-running Honda 2-cylinder engine • Versamow mulching technology</p>

<h3 class="font-semibold mb-2 mt-5">Engine & Equipment</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Honda</li>
  <li><strong>Engine model</strong> – GCV 530</li>
  <li><strong>Engine</strong> – 4-stroke OHC petrol, 90° V-Twin, vertical crankshaft</li>
  <li><strong>Fuel</strong> – Petrol</li>
  <li><strong>Number of cylinders</strong> – 2</li>
  <li><strong>Cooling</strong> – Air-cooled</li>
  <li><strong>Engine power</strong> – 12.5 kW / 17.0 hp at 3600 rpm</li>
  <li><strong>Rated power</strong> – 9.7 kW / 13.2 hp at 2800 rpm</li>
  <li><strong>Displacement</strong> – 530 cm³</li>
  <li><strong>Fuel tank</strong> – 8.5 litres</li>
  <li><strong>Transmission</strong> – Hydrostatic</li>
  <li><strong>Max. speed</strong> – 8.2 km/h</li>
  <li><strong>Drive</strong> – Rear wheel drive</li>
  <li><strong>Reverse speed</strong> – 4.2 km/h</li>
  <li><strong>Fuel gauge</strong> – Yes</li>
  <li><strong>Electric start</strong> – Yes</li>
  <li><strong>Rear tyres</strong> – 18×8.50-8″</li>
  <li><strong>Front tyres</strong> – 13×5.00-6″</li>
  <li><strong>Tyre tread</strong> – Lawn</li>
  <li><strong>Turning radius</strong> – 180 cm</li>
  <li><strong>Pendulum front axle</strong> – Yes</li>
  <li><strong>Axle material</strong> – Cast front axle</li>
  <li><strong>Direction control</strong> – Foot pedal rocker with separate forward/reverse pedals</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Mowing Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Max. area</strong> – 7500 m²</li>
  <li><strong>Cutting width</strong> – 102 cm</li>
  <li><strong>Number of blades</strong> – 2</li>
  <li><strong>Cutting heights</strong> – 29–90 mm</li>
  <li><strong>Number of heights</strong> – 7</li>
  <li><strong>Height adjustment</strong> – Central</li>
  <li><strong>Collector volume</strong> – 300 litres</li>
  <li><strong>Mowing methods</strong> – Collection, mulching</li>
  <li><strong>Mulching kit</strong> – Honda Versamow™ selective</li>
  <li><strong>Rear discharge</strong> – Yes, rear deflector optional</li>
  <li><strong>Airflow system</strong> – Honda Optiflow</li>
  <li><strong>Fill indicator</strong> – Acoustic signal and flashing light</li>
  <li><strong>Blade engagement</strong> – Electromagnetic</li>
  <li><strong>Collector emptying</strong> – Manual</li>
  <li><strong>Water hose connection</strong> – Yes</li>
  <li><strong>Number of gauge wheels</strong> – 4</li>
  <li><strong>Mowing in reverse</strong> – Yes, safety button</li>
  <li><strong>Max. slope</strong> – 10° (17 %)</li>
  <li><strong>Blade drive</strong> – Synchronous</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Comfort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Seat</strong> – Comfort seat, foldable, high backrest, water drain</li>
  <li><strong>Seat suspension</strong> – Parallel suspension</li>
  <li><strong>Seat adjustment</strong> – Single-lever, 6 positions</li>
  <li><strong>Headlights</strong> – Yes</li>
  <li><strong>Tow hitch</strong> – Available as accessory</li>
  <li><strong>Bumper</strong> – Yes</li>
  <li><strong>Dashboard</strong> – 7 LED, hour meter, voltmeter, colour LCD display</li>
  <li><strong>Battery charger</strong> – Included</li>
  <li><strong>Cruise control</strong> – Yes</li>
  <li><strong>USB socket</strong> – Yes</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Delivery contents</h3>
<ul class="space-y-1 mb-3">
  <li>Base unit – 1</li>
  <li>Ignition keys – 2</li>
  <li>User manual – 1</li>
  <li>Engine manual – 1</li>
  <li>Grass collector – 1</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Environment, dimensions and weight</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Sound pressure at operator ear</strong> – 85 dB(A)</li>
  <li><strong>Length</strong> – 246 cm</li>
  <li><strong>Width</strong> – 106 cm</li>
  <li><strong>Height</strong> – 112 cm</li>
  <li><strong>Weight</strong> – 245 kg</li>
  <li><strong>Guaranteed sound power level</strong> – 100 dB(A)</li>
  <li><strong>Vibration at seat</strong> – 0.8 m/s²</li>
  <li><strong>Vibration at steering wheel</strong> – 3.3 m/s²</li>
</ul>`,
    price_eur: 3190.00,
    image_url: "/21-1.webp",
    gallery: ["/21-1.webp", "/21-2.webp", "/21-3.webp", "/21-4.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-02T10:00:00Z",
  },
  {
    id: "prod-22",
    slug: "husqvarna-ts-112-inkl-winterpaket-110-mit-grasfangbox-210l",
    category_id: "cat-2",
    name_de: "Husqvarna TS 112 inkl. Winterpaket 110 mit Grasfangbox 210l",
    name_fr: "Husqvarna TS 112 avec Pack Hiver 110 & Bac de ramassage 210l",
    name_en: "Husqvarna TS 112 incl. Winter Package 110 with Grass Collector 210l",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rasentraktor TS 112 – Modell 2023 inkl. Winterpaket 110 mit Husqvarna Grasfangbox 210l</h2>

<p class="mb-3">Der neue Husqvarna Rasentraktor TS 112 mit Seitauswurf eignet sich als benutzerfreundlicher Gartentraktor ideal für Hausbesitzer mit kleinen bis mittelgroßen Gärten. Dieser effiziente Gartentraktor mit Seitenauswurf besticht durch sein Design und die durchdachte Ergonomie bei kurzer Bauweise. Er verfügt über einen leistungsstarken Husqvarna 413AE Motor mit 413 ccm, der ohne Choke startet, sowie ein pedalgesteuertes hydrostatisches Getriebe mit bequemer Bedienung. Das 95 cm Mähwerk wird manuell zugeschaltet.</p>

<ul class="space-y-1 mb-3">
  <li>✔️ Leistungsstarker 413 cm³ Husqvarna Motor</li>
  <li>✔️ Pedalgesteuerter, stufenloser Hydrostatantrieb</li>
  <li>✔️ 95 cm breites Mähdeck mit Stützrädern</li>
  <li>✔️ LED-Doppelscheinwerfer</li>
  <li>✔️ Anhängezugvorrichtung serienmäßig</li>
</ul>

<p class="mb-3"><strong>Winterpaket besteht aus:</strong> Schneeräumschild Standard 110 cm, Standard Plus Verstellhebel, Anbaurahmen</p>

<h3 class="font-semibold mb-2 mt-5">Produkt Merkmale</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Kompakte Bauweise</strong> – Kompaktes Design für einfaches Manövrieren an Engstellen</li>
  <li><strong>Rückwärtsfahrsystem (ROS)</strong> – Deaktiviert die Schneidmesser beim Rückwärtsfahren für mehr Sicherheit</li>
  <li><strong>Start ohne Choke</strong> – Dank Auto Choke leicht zu bedienen</li>
  <li><strong>Pedalgesteuertes Hydrostatikgetriebe</strong> – Separate Pedale für Vorwärts- und Rückwärtsfahren</li>
  <li><strong>Federunterstütztes Mähdeck</strong> – Weniger Kraftaufwand beim Wechsel der Schnitthöhe</li>
  <li><strong>Am Kotflügel montierte Schnitthöhenverstellung</strong> – Leicht zugänglich, federgestützt</li>
  <li><strong>Leicht verstellbarer Sitz</strong> – Nach vorne/hinten und aufwärts/abwärts einstellbar</li>
  <li><strong>Sicherheitsschalter unter dem Sitz</strong> – Motor und Mähdeck schalten sich automatisch ab</li>
  <li><strong>Offener Durchstieg</strong> – Für bequemen Ein- und Ausstieg</li>
  <li><strong>Pendelvorderachse</strong> – Gute Balance und herausragender Fahrkomfort</li>
  <li><strong>Husqvarna Series Motor</strong> – 413AE mit Ölfilter, Druckölschmierung, Anti-Vibrations-System und Auto Choke</li>
  <li><strong>LED Doppelscheinwerfer</strong> – Erleichtert Arbeiten während der Dunkelheit</li>
  <li><strong>Optional mehrere Mäh-Möglichkeiten</strong> – Mulchkit und Grasfangbox als Zubehör</li>
  <li><strong>Serienmäßige Anhängerkupplung</strong> – Vielseitig einsetzbar</li>
  <li><strong>Ganzjahreseinsatz</strong> – Zubehör wie Schneeräumschilder, Kehrbürsten und Anhänger</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motorhersteller</strong> – Husqvarna</li>
  <li><strong>Motor</strong> – 413AE</li>
  <li><strong>Hubraum</strong> – 413 ccm</li>
  <li><strong>Nettoleistung</strong> – 8 kW bei 2.600 U/min</li>
  <li><strong>Zylinder</strong> – 1</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Tankvolumen</strong> – 6,0 Liter</li>
  <li><strong>Ölfilter</strong> – Ja</li>
  <li><strong>Schnittbreite</strong> – 95 cm</li>
  <li><strong>Schnitthöhe</strong> – 30 – 100 mm</li>
  <li><strong>Schnitthöhenstufen</strong> – 6</li>
  <li><strong>Schnitthöhenverstellung</strong> – Kotflügelmontiert, zentral, federunterstützt</li>
  <li><strong>Mähmethoden</strong> – Seitauswurf / Mulchen / optional Sammeln</li>
  <li><strong>Stützräder</strong> – 2</li>
  <li><strong>Getriebeart</strong> – Hydrostatisch</li>
  <li><strong>Geschwindigkeit vor-/rückwärts</strong> – 0 – 6,4 / 0 – 3,5 km/h</li>
  <li><strong>Getriebehersteller</strong> – Tuff Torq</li>
  <li><strong>Reifengröße vorn / hinten</strong> – 15 X 6 / 18 X 8.5</li>
  <li><strong>Sitz Material</strong> – Vinyl</li>
  <li><strong>Sitz Rückenlehnenhöhe</strong> – Hoch</li>
  <li><strong>Betriebsstundenzähler</strong> – Digital</li>
  <li><strong>Deflektor seitlich</strong> – Im Lieferumfang</li>
  <li><strong>Gewicht netto</strong> – 200 kg</li>
  <li><strong>Schalldruckpegel</strong> – 83 dB(A)</li>
  <li><strong>Schallleistungspegel LWA</strong> – 100 dB(A)</li>
  <li><strong>Vibration Lenkrad</strong> – 2,05 m/s²</li>
  <li><strong>Vibration Sitz</strong> – 0,12 m/s²</li>
</ul>

<p class="mb-3"><strong>Husqvarna PDI:</strong> Wir sind ein autorisierter Husqvarna Fachhändler. Entsprechend der Herstellervorgaben wird die geforderte PDI (Pre Delivery Inspection) durchgeführt. Jedes Motorgerät wird von uns vollständig zusammengebaut, inspiziert und auf alle Funktionen getestet.</p>

<h3 class="font-semibold mb-2 mt-5">Schneeschild Standard Plus 110 – mit Anbaurahmen</h3>
<p class="mb-3">Das Räumschild besitzt eine Sicherheits-Klappmechanik. Trifft das Schneeschild auf ein Hindernis, wird eine Überlastsicherung ausgelöst. Das Schild klappt nahezu ohne Kraftaufwand aus dem Gefahrenbereich.</p>
<p class="mb-3">Breite: 1,10 m (110 cm), Höhe: ca. 0,40 m (40 cm). Wird serienmäßig mit einer Gummileiste ausgeliefert. Die 2 einstellbaren Gleitspitzen unterstützen die Stahl-Gummileiste vor Hindernissen.</p>

<ul class="space-y-1 mb-3">
  <li>Der bewegliche Teil klappt weg bei starker Beanspruchung oder festen Hindernissen</li>
  <li>Spannkraft der Zugfedern kann je nach Bedarf verstellt werden</li>
  <li>Schneeschild kann vom Fahrersitz aus angehoben werden</li>
  <li>Seitlich schwenkbar in 5 Positionen</li>
</ul>

<h4 class="font-semibold mb-2">Technische Daten Schneeschild:</h4>
<ul class="space-y-1 mb-3">
  <li>Stahl Schneeräumschild lackiert mit Sicherheitsfederklappen</li>
  <li>Anbaurahmen mit Aushebung</li>
  <li>Bedienhebel für seitliche Verstellung und Aushebung</li>
  <li>Gummischürfleiste</li>
  <li>2 Gleitspitzen</li>
  <li>Montagematerial Traktor</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Husqvarna Grasfangbox 210l – TS 112 | TS 114</h3>
<p class="mb-3">Grasfangbox mit 210 Liter Fassungsvermögen und haltbaren Sammelbehältern aus Polyesternetz. Die Füllstandsanzeige informiert, wann die Sammelbehälter voll sind. Die leichtgleitende Innenseite und die integrierten Tragegriffe erleichtern die Entsorgung des Schnittguts.</p>
<p class="mb-3"><strong>Passend für:</strong> TS 112, TS 114</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna TS 112 – Modèle 2023 avec Pack Hiver 110 & Bac de ramassage 210l</h2>

<p class="mb-3">Le nouveau tracteur tondeuse Husqvarna TS 112 à évacuation latérale est idéal pour les propriétaires de petits et moyens jardins. Efficace et ergonomique, il est équipé d'un moteur Husqvarna 413AE de 413 cm³ sans starter, d'une transmission hydrostatique à pédale et d'un plateau de coupe de 95 cm à engagement manuel.</p>

<ul class="space-y-1 mb-3">
  <li>✔️ Moteur Husqvarna 413 cm³ performant</li>
  <li>✔️ Transmission hydrostatique continue à pédale</li>
  <li>✔️ Plateau de coupe de 95 cm avec roulettes</li>
  <li>✔️ Double phare LED</li>
  <li>✔️ Attelage de série</li>
</ul>

<p class="mb-3"><strong>Pack Hiver :</strong> Lame à neige Standard 110 cm, levier de réglage Standard Plus, châssis de montage</p>

<h3 class="font-semibold mb-2 mt-5">Caractéristiques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Design compact</strong> – Manœuvre facile dans les passages étroits</li>
  <li><strong>Système de marche arrière (ROS)</strong> – Désactive les lames en marche arrière</li>
  <li><strong>Démarrage sans starter</strong> – Auto Choke pour une utilisation facile</li>
  <li><strong>Transmission hydrostatique à pédale</strong> – Pédales séparées avant/arrière</li>
  <li><strong>Plateau à ressort</strong> – Moins d'effort pour changer la hauteur de coupe</li>
  <li><strong>Réglage de hauteur sur l'aile</strong> – Accessible et ergonomique</li>
  <li><strong>Siège réglable</strong> – Avant/arrière et hauteur</li>
  <li><strong>Contact de sécurité sous le siège</strong> – Arrêt automatique du moteur et du plateau</li>
  <li><strong>Ouverture libre</strong> – Entrée et sortie faciles</li>
  <li><strong>Essieu avant pendulaire</strong> – Bon équilibre et confort</li>
  <li><strong>Moteur Husqvarna Series</strong> – 413AE avec filtre à huile, pompe de lubrification, anti-vibrations, Auto Choke</li>
  <li><strong>Double phare LED</strong> – Travail facilité dans l'obscurité</li>
  <li><strong>Options de tonte multiples</strong> – Kit mulching et bac en option</li>
  <li><strong>Attelage de série</strong> – Usage polyvalent</li>
  <li><strong>Utilisation toute l'année</strong> – Accessoires : lame à neige, balayeuse, remorque</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Husqvarna 413AE</li>
  <li><strong>Cylindrée</strong> – 413 cm³</li>
  <li><strong>Puissance nette</strong> – 8 kW à 2.600 tr/min</li>
  <li><strong>Réservoir</strong> – 6,0 litres</li>
  <li><strong>Largeur de coupe</strong> – 95 cm</li>
  <li><strong>Hauteur de coupe</strong> – 30 – 100 mm, 6 positions</li>
  <li><strong>Transmission</strong> – Hydrostatique</li>
  <li><strong>Vitesse avant/arrière</strong> – 0 – 6,4 / 0 – 3,5 km/h</li>
  <li><strong>Pneus avant/arrière</strong> – 15×6 / 18×8.5</li>
  <li><strong>Poids net</strong> – 200 kg</li>
  <li><strong>Niveau sonore</strong> – 100 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lame à neige Standard Plus 110 – avec châssis</h3>
<p class="mb-3">Lame de sécurité avec mécanisme à bascule. Largeur: 1,10 m (110 cm), hauteur: env. 0,40 m (40 cm). Livrée avec bande caoutchouc et 2 patins réglables.</p>

<ul class="space-y-1 mb-3">
  <li>Partie mobile bascule en cas d'obstacle</li>
  <li>Tension des ressorts réglable</li>
  <li>Lame relevable depuis le siège</li>
  <li>Orientation latérale en 5 positions</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Bac de ramassage Husqvarna 210l</h3>
<p class="mb-3">Bac de 210 litres avec collecteurs en filet polyester. Indicateur de remplissage. Parois intérieures glissantes et poignées intégrées pour faciliter la vidange.</p>
<p class="mb-3"><strong>Compatible :</strong> TS 112, TS 114</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna TS 112 – Model 2023 incl. Winter Package 110 with Grass Collector 210l</h2>

<p class="mb-3">The new Husqvarna TS 112 side-discharge lawn tractor is ideal for homeowners with small to medium-sized gardens. Featuring a powerful Husqvarna 413AE engine (413 cc) with no-choke start, pedal-controlled hydrostatic transmission, and a 95 cm manually engaged cutting deck.</p>

<ul class="space-y-1 mb-3">
  <li>✔️ Powerful 413 cc Husqvarna engine</li>
  <li>✔️ Pedal-controlled continuous hydrostatic drive</li>
  <li>✔️ 95 cm cutting deck with support wheels</li>
  <li>✔️ Dual LED headlights</li>
  <li>✔️ Trailer hitch standard</li>
</ul>

<p class="mb-3"><strong>Winter Package includes:</strong> Snow blade Standard 110 cm, Standard Plus adjustment lever, mounting frame</p>

<h3 class="font-semibold mb-2 mt-5">Product Features</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Compact design</strong> – Easy manoeuvring in tight spaces</li>
  <li><strong>Reverse Operating System (ROS)</strong> – Disables blades when reversing</li>
  <li><strong>No-choke start</strong> – Auto Choke for easy operation</li>
  <li><strong>Pedal-controlled hydrostatic transmission</strong> – Separate forward/reverse pedals</li>
  <li><strong>Spring-assisted cutting deck</strong> – Less effort when changing cutting height</li>
  <li><strong>Fender-mounted height adjustment</strong> – Accessible and ergonomic</li>
  <li><strong>Adjustable seat</strong> – Fore/aft and up/down adjustment</li>
  <li><strong>Seat safety switch</strong> – Auto shut-off when leaving the seat</li>
  <li><strong>Open step-through</strong> – Easy entry and exit</li>
  <li><strong>Pendulum front axle</strong> – Good balance and outstanding ride comfort</li>
  <li><strong>Husqvarna Series engine</strong> – 413AE with oil filter, pressure lubrication, anti-vibration system, Auto Choke</li>
  <li><strong>Dual LED headlights</strong> – Easier work in the dark</li>
  <li><strong>Multiple mowing options</strong> – Mulching kit and grass collector available</li>
  <li><strong>Standard trailer hitch</strong> – Versatile use</li>
  <li><strong>Year-round use</strong> – Accessories: snow blades, sweepers, trailers</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Husqvarna 413AE</li>
  <li><strong>Displacement</strong> – 413 cc</li>
  <li><strong>Net power</strong> – 8 kW at 2.600 rpm</li>
  <li><strong>Fuel tank</strong> – 6.0 litres</li>
  <li><strong>Cutting width</strong> – 95 cm</li>
  <li><strong>Cutting height</strong> – 30 – 100 mm, 6 positions</li>
  <li><strong>Transmission</strong> – Hydrostatic</li>
  <li><strong>Speed forward/reverse</strong> – 0 – 6.4 / 0 – 3.5 km/h</li>
  <li><strong>Tyres front/rear</strong> – 15×6 / 18×8.5</li>
  <li><strong>Net weight</strong> – 200 kg</li>
  <li><strong>Noise level</strong> – 100 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Snow Blade Standard Plus 110 – with Mounting Frame</h3>
<p class="mb-3">Safety blade with flip mechanism. Width: 1.10 m (110 cm), height: approx. 0.40 m (40 cm). Supplied with rubber strip and 2 adjustable skid shoes.</p>

<ul class="space-y-1 mb-3">
  <li>Moving part flips away on impact</li>
  <li>Adjustable spring tension</li>
  <li>Blade can be raised from the seat</li>
  <li>Sideways pivoting in 5 positions</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Husqvarna Grass Collector 210l</h3>
<p class="mb-3">210 litre collector with durable polyester mesh collection containers. Fill indicator. Smooth interior and integrated carrying handles for easy disposal.</p>
<p class="mb-3"><strong>Compatible with:</strong> TS 112, TS 114</p>`,
    price_eur: 1959.00,
    image_url: "/22-1.jpg",
    gallery: ["/22-1.jpg", "/22-2.jpg", "/22-3.jpg", "/22-4.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-03T10:00:00Z",
  },
  {
    id: "prod-23",
    slug: "husqvarna-frontmaher-r-112c-mit-mahdeck-combi-85-winterpaket",
    category_id: "cat-2",
    name_de: "Husqvarna Frontmäher R 112C mit Mähdeck Combi 85 – Winterpaket mit Schneeschild, Gummileiste und Schneeketten – Modell 2023",
    name_fr: "Husqvarna Tondeuse frontale R 112C avec plateau Combi 85 – Pack Hiver avec lame à neige, bande caoutchouc et chaînes – Modèle 2023",
    name_en: "Husqvarna Front Mower R 112C with Combi 85 Deck – Winter Package with Snow Blade, Rubber Strip and Snow Chains – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Frontmäher R 112C mit Mähdeck Combi 85 – Winterpaket</h2>

<p class="mb-3">Der Husqvarna Frontmäher R 112C ist ein wendiger Aufsitzmäher mit Knicklenkung und einem 85 cm Combi-Mähdeck. Dank des mittig angeordneten Knickgelenks hat der R 112C einen extrem kleinen Wendekreis von nur 65 cm – ideal für verwinkelte Grundstücke und enge Passagen.</p>

<h3 class="font-semibold mb-2 mt-5">Motor & Ausstattung</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Husqvarna</li>
  <li><strong>Motorbezeichnung</strong> – Husqvarna Series HS 413AE</li>
  <li><strong>Anzahl Zylinder</strong> – 1</li>
  <li><strong>Hubraum</strong> – 413 cm³</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Geräteleistung</strong> – 8,4 kW / 11,4 PS bei 3000 U/min</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Anzahl Gänge (V/R)</strong> – Stufenlos</li>
  <li><strong>Max. Geschwindigkeit</strong> – 7 km/h</li>
  <li><strong>Kraftstofftank</strong> – 4 Liter</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Art der Motorschmierung</strong> – Spritzschmierung</li>
  <li><strong>Lenkungsmechanismus</strong> – Knicklenkung mittig</li>
  <li><strong>Reifengröße hinten</strong> – 155/50-8″</li>
  <li><strong>Reifengröße vorne</strong> – 155/50-8″</li>
  <li><strong>Reifenprofil</strong> – Rasenprofil</li>
  <li><strong>Wendekreis</strong> – 65 cm</li>
  <li><strong>Hinterachse pendelnd</strong> – Ja</li>
  <li><strong>Material Achse</strong> – Vorne: Stahl; hinten Hydrostat</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Mähdaten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Schnittbreite</strong> – 85 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Schnitthöhen</strong> – 25–70 mm</li>
  <li><strong>Schnitthöhenverstellung</strong> – Manuell</li>
  <li><strong>Mähmethoden</strong> – Mulchen, Heckauswurf-Schwadablage</li>
  <li><strong>Mulchkit</strong> – Mulchmähwerk inklusive</li>
  <li><strong>Fangen</strong> – Nein</li>
  <li><strong>Heckauswurf-Schwadablage</strong> – Ja</li>
  <li><strong>Seitenauswurf</strong> – Nein</li>
  <li><strong>Mähwerkseinschaltung</strong> – Manuell</li>
  <li><strong>Wasserschlauchanschluss</strong> – Nein</li>
  <li><strong>Mähwerkstyp</strong> – Gestanzt</li>
  <li><strong>Anzahl Führungsräder Mähwerk</strong> – 2</li>
  <li><strong>Bioclip</strong> – Ja</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Komfort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Sitz</strong> – Komfortsitz, klappbar, mit Wasserablauf</li>
  <li><strong>Sitzfederung</strong> – Gelenkfederung</li>
  <li><strong>12V Steckdose</strong> – Nein</li>
  <li><strong>Sitzverstellung</strong> – Per Schrauben</li>
  <li><strong>Scheinwerfer</strong> – Nein</li>
  <li><strong>Zugöse</strong> – Im Lieferumfang enthalten</li>
  <li><strong>Getränkehalter</strong> – Ja</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Bedienungsanleitung Gerät – 1</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Umwelt, Maße und Gewicht</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Abmessungen (L×B×H)</strong> – 212 × 88 × 108 cm</li>
  <li><strong>Garantie</strong> – 2 Jahre bei privater Nutzung, 1 Jahr bei gewerblicher Nutzung</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 85 dB(A)</li>
  <li><strong>Vibration am Sitz</strong> – 0,7 m/s²</li>
  <li><strong>Gewicht</strong> – 191 kg</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
  <li><strong>Vibration am Lenkrad</strong> – 1,6 m/s²</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tondeuse frontale R 112C avec plateau Combi 85 – Pack Hiver</h2>

<p class="mb-3">La tondeuse frontale Husqvarna R 112C est une tondeuse autoportée maniable avec direction articulée et plateau Combi de 85 cm. Grâce à son articulation centrale, le R 112C offre un rayon de braquage extrêmement petit de seulement 65 cm – idéal pour les propriétés irrégulières et les passages étroits.</p>

<h3 class="font-semibold mb-2 mt-5">Moteur & Équipement</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Husqvarna</li>
  <li><strong>Désignation moteur</strong> – Husqvarna Series HS 413AE</li>
  <li><strong>Nombre de cylindres</strong> – 1</li>
  <li><strong>Cylindrée</strong> – 413 cm³</li>
  <li><strong>Refroidissement</strong> – Air</li>
  <li><strong>Carburant</strong> – Essence</li>
  <li><strong>Puissance nominale</strong> – 8,4 kW / 11,4 ch à 3000 tr/min</li>
  <li><strong>Transmission</strong> – Hydrostatique</li>
  <li><strong>Vitesse max.</strong> – 7 km/h</li>
  <li><strong>Réservoir</strong> – 4 litres</li>
  <li><strong>Traction</strong> – Arrière</li>
  <li><strong>Démarrage électrique</strong> – Oui</li>
  <li><strong>Lubrification</strong> – Barbotage</li>
  <li><strong>Direction</strong> – Articulation centrale</li>
  <li><strong>Pneus arrière</strong> – 155/50-8″</li>
  <li><strong>Pneus avant</strong> – 155/50-8″</li>
  <li><strong>Rayon de braquage</strong> – 65 cm</li>
  <li><strong>Essieu arrière pendulaire</strong> – Oui</li>
  <li><strong>Tension bord</strong> – 12 V</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données de tonte</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Largeur de coupe</strong> – 85 cm</li>
  <li><strong>Nombre de lames</strong> – 2</li>
  <li><strong>Hauteurs de coupe</strong> – 25–70 mm</li>
  <li><strong>Réglage hauteur</strong> – Manuel</li>
  <li><strong>Méthodes</strong> – Mulching, éjection arrière</li>
  <li><strong>Kit mulching</strong> – Inclus</li>
  <li><strong>Ramassage</strong> – Non</li>
  <li><strong>Éjection arrière</strong> – Oui</li>
  <li><strong>Éjection latérale</strong> – Non</li>
  <li><strong>Embrayage</strong> – Manuel</li>
  <li><strong>Raccord d'eau</strong> – Non</li>
  <li><strong>Type de plateau</strong> – Embouti</li>
  <li><strong>Roulettes</strong> – 2</li>
  <li><strong>Bioclip</strong> – Oui</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Confort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Siège</strong> – Confort, pliable, avec drainage d'eau</li>
  <li><strong>Suspension</strong> – Suspension articulée</li>
  <li><strong>Prise 12V</strong> – Non</li>
  <li><strong>Réglage siège</strong> – Par vis</li>
  <li><strong>Phares</strong> – Non</li>
  <li><strong>Anneau de traction</strong> – Inclus</li>
  <li><strong>Porte-gobelet</strong> – Oui</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Dimensions & Poids</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Dimensions (L×l×H)</strong> – 212 × 88 × 108 cm</li>
  <li><strong>Garantie</strong> – 2 ans privé, 1 an professionnel</li>
  <li><strong>Niveau sonore</strong> – 100 dB(A)</li>
  <li><strong>Poids</strong> – 191 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Front Mower R 112C with Combi 85 Deck – Winter Package</h2>

<p class="mb-3">The Husqvarna R 112C front mower is a manoeuvrable ride-on mower with articulated steering and an 85 cm Combi cutting deck. Thanks to its central articulation joint, the R 112C has an extremely tight turning radius of just 65 cm – ideal for irregular properties and narrow passages.</p>

<h3 class="font-semibold mb-2 mt-5">Engine & Equipment</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Husqvarna</li>
  <li><strong>Engine model</strong> – Husqvarna Series HS 413AE</li>
  <li><strong>Number of cylinders</strong> – 1</li>
  <li><strong>Displacement</strong> – 413 cm³</li>
  <li><strong>Cooling</strong> – Air-cooled</li>
  <li><strong>Fuel</strong> – Petrol</li>
  <li><strong>Rated power</strong> – 8.4 kW / 11.4 hp at 3000 rpm</li>
  <li><strong>Transmission</strong> – Hydrostatic</li>
  <li><strong>Max. speed</strong> – 7 km/h</li>
  <li><strong>Fuel tank</strong> – 4 litres</li>
  <li><strong>Drive</strong> – Rear wheel drive</li>
  <li><strong>Electric start</strong> – Yes</li>
  <li><strong>Lubrication</strong> – Splash lubrication</li>
  <li><strong>Steering</strong> – Centre articulation</li>
  <li><strong>Rear tyres</strong> – 155/50-8″</li>
  <li><strong>Front tyres</strong> – 155/50-8″</li>
  <li><strong>Turning radius</strong> – 65 cm</li>
  <li><strong>Pendulum rear axle</strong> – Yes</li>
  <li><strong>On-board voltage</strong> – 12 V</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Mowing Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Cutting width</strong> – 85 cm</li>
  <li><strong>Number of blades</strong> – 2</li>
  <li><strong>Cutting heights</strong> – 25–70 mm</li>
  <li><strong>Height adjustment</strong> – Manual</li>
  <li><strong>Methods</strong> – Mulching, rear discharge</li>
  <li><strong>Mulching kit</strong> – Included</li>
  <li><strong>Collection</strong> – No</li>
  <li><strong>Rear discharge</strong> – Yes</li>
  <li><strong>Side discharge</strong> – No</li>
  <li><strong>Blade engagement</strong> – Manual</li>
  <li><strong>Water connection</strong> – No</li>
  <li><strong>Deck type</strong> – Stamped</li>
  <li><strong>Gauge wheels</strong> – 2</li>
  <li><strong>Bioclip</strong> – Yes</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Comfort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Seat</strong> – Comfort, foldable, with water drain</li>
  <li><strong>Suspension</strong> – Joint suspension</li>
  <li><strong>12V socket</strong> – No</li>
  <li><strong>Seat adjustment</strong> – Via screws</li>
  <li><strong>Headlights</strong> – No</li>
  <li><strong>Tow hitch</strong> – Included</li>
  <li><strong>Cup holder</strong> – Yes</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Dimensions & Weight</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Dimensions (L×W×H)</strong> – 212 × 88 × 108 cm</li>
  <li><strong>Warranty</strong> – 2 years private, 1 year commercial</li>
  <li><strong>Noise level</strong> – 100 dB(A)</li>
  <li><strong>Weight</strong> – 191 kg</li>
</ul>`,
    price_eur: 2495.00,
    image_url: "/23-1.webp",
    gallery: ["/23-1.webp", "/23-2.webp", "/23-3.webp", "/23-4.webp"],
    is_hot: true,
    stock: 99,
    created_at: "2026-06-04T10:00:00Z",
  },
  {
    id: "prod-24",
    slug: "husqvarna-profi-allrad-frontmaher-r-316tsx-awd-modell-2023",
    category_id: "cat-2",
    name_de: "Husqvarna Profi Allrad-Frontmäher R 316TsX AWD – Modell 2023 – Grundgerät ohne Mähwerk",
    name_fr: "Husqvarna Tondeuse frontale professionnelle 4×4 R 316TsX AWD – Modèle 2023 – Unité de base sans plateau",
    name_en: "Husqvarna Professional All-Wheel Drive Front Mower R 316TsX AWD – Model 2023 – Base unit without cutting deck",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Profi Allrad-Frontmäher R 316TsX AWD – Grundgerät ohne Mähwerk</h2>

<p class="mb-3">Dieses Produkt wird vor Auslieferung einer kostenlosen Übergabeinspektion gemäß Husqvarna „Pre-Delivery-Inspection"-Richtlinien unterzogen. Das Produkt wird montiert, betriebsbereit und inklusive des Husqvarna Protokolls zur Übergabeinspektion an Ihre Adresse geliefert.</p>

<p class="mb-3">Dieser kraftvolle und vielseitige Rider mit Zweizylinder-Motor und Allradantrieb verfügt über das erstklassige BioClip® und Heckauswurf System mit optional 94, 103 oder 112 cm Schnittbreite. Geeignet für Garten- und Grundbesitzer, welche ganzjährig ein perfektes Ergebnis erzielen wollen. Die Knicklenkung mit dynamischer Gewichtsübertragung und das frontmontierte Mähdeck ermöglichen eine einfache Bedienung, hervorragende Manövrierbarkeit und einen guten Überblick über den Arbeitsbereich. Anbaugeräte wie Kehrbürste oder Schneeräumschild können einfach montiert werden.</p>

<h3 class="font-semibold mb-2 mt-5">Vorteile</h3>
<ul class="space-y-1 mb-3">
  <li>Besonders laufruhiger, vibrationsarmer und langlebiger Motor durch 2-Zylinder-Technik</li>
  <li>Hydrostat-Getriebe ermöglicht Geschwindigkeitsveränderung sowie Wechsel zwischen vorwärts und rückwärts ohne Schalten oder Kuppeln</li>
  <li>Hydrostat-Getriebe erlaubt stufenlose Wahl der Fahrgeschwindigkeit</li>
  <li>Bequemes Anlassen des Motors per Zündschlüssel</li>
  <li>Bestmögliche Traktion auf jedem Gelände durch Allradantrieb</li>
  <li>Mähdeck lässt sich einfach in die Serviceposition neigen – Reinigung und Wartung vereinfacht</li>
  <li>Zuverlässiger und langlebiger Motor von Kawasaki</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Kawasaki</li>
  <li><strong>Motorbezeichnung</strong> – FS Series V-Twin FS481V</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Hubraum</strong> – 603 cm³</li>
  <li><strong>Motorleistung</strong> – 11,4 kW / 15,5 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 9,8 kW / 13,5 PS bei 3100 U/min</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Kraftstofftank</strong> – 12 Liter</li>
  <li><strong>Lenkungsmechanismus</strong> – Knicklenkung</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Art der Motorschmierung</strong> – Öldruckumlaufschmierung</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Antrieb</strong> – Allradantrieb</li>
  <li><strong>Max. Geschwindigkeit</strong> – 9,5 km/h</li>
  <li><strong>Reifengröße vorne/hinten</strong> – 170/60-8″</li>
  <li><strong>Lenkung</strong> – Servolenkung</li>
  <li><strong>Wendekreis</strong> – 30 cm</li>
  <li><strong>Hinterachse pendelnd</strong> – Ja</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Anzahl Messer</strong> – 3</li>
  <li><strong>Schnittbreite von/bis</strong> – Optional 94 – 112 cm</li>
  <li><strong>Schnitthöhen</strong> – 25–75 mm</li>
  <li><strong>Mähmethoden</strong> – BioClip® / Heckauswurf</li>
  <li><strong>Bioclip</strong> – Ja</li>
  <li><strong>Mähwerk mit Serviceposition</strong> – Ja</li>
  <li><strong>Sitz</strong> – Hohe Rückenlehne</li>
  <li><strong>Sitzfederung</strong> – Parallelfederung</li>
  <li><strong>12V Steckdose</strong> – Ja</li>
  <li><strong>Sitzverstellung</strong> – Diagonale Sitzverstellung</li>
  <li><strong>Betriebsstundenzähler</strong> – Ja</li>
  <li><strong>Scheinwerfer</strong> – Doppelte LED Scheinwerfer</li>
  <li><strong>Zugöse</strong> – Im Lieferumfang enthalten</li>
  <li><strong>Connect & Bluetooth</strong> – Ja</li>
  <li><strong>Gewicht</strong> – 248 kg</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 202 × 89 × 115 cm</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 99 dB(A)</li>
  <li><strong>Garantie</strong> – 2 Jahre privat, 1 Jahr gewerblich</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 84 dB(A)</li>
  <li><strong>Vibration Lenkrad</strong> – 2,5 m/s²</li>
  <li><strong>Vibration Sitz</strong> – 0,7 m/s²</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Bedienungsanleitung Gerät – 1</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tondeuse frontale professionnelle 4×4 R 316TsX AWD – Modèle 2023</h2>

<p class="mb-3">Ce produit est soumis avant livraison à une inspection gratuite conformément aux directives Husqvarna « Pre-Delivery Inspection ». Livré monté, prêt à l'emploi avec le protocole d'inspection.</p>

<p class="mb-3">Ce rider puissant et polyvalent avec moteur bicylindre et transmission intégrale est doté du système BioClip® et d'éjection arrière avec largeur de coupe optionnelle de 94, 103 ou 112 cm. La direction articulée avec transfert de poids dynamique et le plateau monté à l'avant offrent une utilisation facile, une excellente maniabilité et une bonne visibilité.</p>

<h3 class="font-semibold mb-2 mt-5">Avantages</h3>
<ul class="space-y-1 mb-3">
  <li>Moteur bicylindre particulièrement silencieux, à faibles vibrations et durable</li>
  <li>Transmission hydrostatique pour changement de vitesse et de direction sans embrayage</li>
  <li>Choix continu de la vitesse de déplacement</li>
  <li>Démarrage par clé de contact</li>
  <li>Traction optimale sur tout terrain grâce à la transmission intégrale</li>
  <li>Plateau inclinable en position service pour un nettoyage et entretien faciles</li>
  <li>Moteur Kawasaki fiable et durable</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Kawasaki</li>
  <li><strong>Modèle moteur</strong> – FS Series V-Twin FS481V</li>
  <li><strong>Nombre de cylindres</strong> – 2</li>
  <li><strong>Cylindrée</strong> – 603 cm³</li>
  <li><strong>Puissance moteur</strong> – 11,4 kW / 15,5 ch à 3600 tr/min</li>
  <li><strong>Puissance nominale</strong> – 9,8 kW / 13,5 ch à 3100 tr/min</li>
  <li><strong>Réservoir</strong> – 12 litres</li>
  <li><strong>Transmission</strong> – Hydrostatique, 4×4</li>
  <li><strong>Vitesse max.</strong> – 9,5 km/h</li>
  <li><strong>Direction</strong> – Articulée avec servo-assistance</li>
  <li><strong>Rayon de braquage</strong> – 30 cm</li>
  <li><strong>Pneus</strong> – 170/60-8″</li>
  <li><strong>Phares</strong> – Double LED</li>
  <li><strong>Poids</strong> – 248 kg</li>
  <li><strong>Garantie</strong> – 2 ans privé, 1 an professionnel</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Professional All-Wheel Drive Front Mower R 316TsX AWD – Model 2023</h2>

<p class="mb-3">This product undergoes a free pre-delivery inspection in accordance with Husqvarna's PDI guidelines. Delivered assembled, ready for use, with the Husqvarna inspection protocol.</p>

<p class="mb-3">This powerful and versatile rider with a twin-cylinder engine and all-wheel drive features the premium BioClip® and rear discharge system with optional 94, 103 or 112 cm cutting width. The articulated steering with dynamic weight transfer and front-mounted cutting deck provide easy operation, excellent manoeuvrability and good visibility. Attachments such as sweepers or snow blades can be easily mounted for year-round use.</p>

<h3 class="font-semibold mb-2 mt-5">Advantages</h3>
<ul class="space-y-1 mb-3">
  <li>Particularly quiet, low-vibration and durable 2-cylinder engine</li>
  <li>Hydrostatic transmission for speed changes and forward/reverse without shifting or clutching</li>
  <li>Continuously variable travel speed</li>
  <li>Convenient key-start ignition</li>
  <li>Best possible traction on any terrain thanks to all-wheel drive</li>
  <li>Cutting deck tilts easily into service position for simplified cleaning and maintenance</li>
  <li>Reliable and durable Kawasaki engine</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Kawasaki</li>
  <li><strong>Engine model</strong> – FS Series V-Twin FS481V</li>
  <li><strong>Number of cylinders</strong> – 2</li>
  <li><strong>Displacement</strong> – 603 cm³</li>
  <li><strong>Engine power</strong> – 11.4 kW / 15.5 hp at 3600 rpm</li>
  <li><strong>Rated power</strong> – 9.8 kW / 13.5 hp at 3100 rpm</li>
  <li><strong>Fuel tank</strong> – 12 litres</li>
  <li><strong>Transmission</strong> – Hydrostatic, AWD</li>
  <li><strong>Max. speed</strong> – 9.5 km/h</li>
  <li><strong>Steering</strong> – Articulated with power steering</li>
  <li><strong>Turning radius</strong> – 30 cm</li>
  <li><strong>Tyres</strong> – 170/60-8″</li>
  <li><strong>Headlights</strong> – Dual LED</li>
  <li><strong>Weight</strong> – 248 kg</li>
  <li><strong>Warranty</strong> – 2 years private, 1 year commercial</li>
</ul>`,
    price_eur: 4092.00,
    image_url: "/24.jpg",
    gallery: ["/24.jpg"],
    is_hot: true,
    stock: 96,
    created_at: "2026-06-05T10:00:00Z",
  },
  {
    id: "prod-25",
    slug: "husqvarna-r-316tx-awd-rider-frontmaher-grundgerat-ohne-mahdeck",
    category_id: "cat-2",
    name_de: "Husqvarna R 316TX AWD Rider | Frontmäher – Grundgerät ohne Mähdeck",
    name_fr: "Husqvarna R 316TX AWD Rider | Tondeuse frontale – Unité de base sans plateau",
    name_en: "Husqvarna R 316TX AWD Rider | Front Mower – Base unit without cutting deck",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna R 316TX AWD Rider | Frontmäher – Grundgerät ohne Mähdeck</h2>

<p class="mb-3">Kompakter, enorm leistungsfähiger und flexibler Allrad-Rider mit einem kraftvollen V-Twin-Motor und einer Auswahl an Mähdecks, BioClip (Mulchen) und Heckauswurf. Ausgestattet mit einem intuitiven Display, Doppelscheinwerfer und Bluetooth-Verbindung, mit welcher der Rider mit Husqvarna Connect verbunden werden kann.</p>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Kawasaki</li>
  <li><strong>Motorbezeichnung</strong> – FS Series V-Twin FS481V</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Hubraum</strong> – 603 cm³</li>
  <li><strong>Motorleistung</strong> – 11,9 kW / 16,2 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 9,6 kW / 13,1 PS bei 2900 U/min</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Kraftstofftank</strong> – 12 Liter</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Antrieb</strong> – Allradantrieb</li>
  <li><strong>Anzahl Gänge (V/R)</strong> – Stufenlos</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Art der Motorschmierung</strong> – Druckschmierung</li>
  <li><strong>Lenkungsmechanismus</strong> – Knicklenkung</li>
  <li><strong>Reifengröße vorne/hinten</strong> – 170/60-8″</li>
  <li><strong>Reifenprofil</strong> – Rasenprofil</li>
  <li><strong>Hinterachse pendelnd</strong> – Ja</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Schnittbreite von/bis</strong> – Optional 94 – 112 cm</li>
  <li><strong>Schnitthöhen</strong> – 25–75 mm</li>
  <li><strong>Anzahl Schnitthöhen</strong> – 10</li>
  <li><strong>Mähmethoden</strong> – BioClip / Heckauswurf</li>
  <li><strong>Sitz</strong> – Hohe Rückenlehne</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 202 × 89 × 118 cm</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna R 316TX AWD Rider | Tondeuse frontale – Unité de base sans plateau</h2>

<p class="mb-3">Rider 4×4 compact, extrêmement performant et flexible avec un puissant moteur V-Twin et un choix de plateaux de coupe, BioClip (mulching) et éjection arrière. Équipé d'un écran intuitif, de doubles phares et d'une connexion Bluetooth pour Husqvarna Connect.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Kawasaki</li>
  <li><strong>Modèle moteur</strong> – FS Series V-Twin FS481V</li>
  <li><strong>Nombre de cylindres</strong> – 2</li>
  <li><strong>Cylindrée</strong> – 603 cm³</li>
  <li><strong>Puissance moteur</strong> – 11,9 kW / 16,2 ch à 3600 tr/min</li>
  <li><strong>Puissance nominale</strong> – 9,6 kW / 13,1 ch à 2900 tr/min</li>
  <li><strong>Réservoir</strong> – 12 litres</li>
  <li><strong>Transmission</strong> – Hydrostatique, 4×4</li>
  <li><strong>Direction</strong> – Articulée</li>
  <li><strong>Pneus</strong> – 170/60-8″</li>
  <li><strong>Dimensions (L×l×H)</strong> – 202 × 89 × 118 cm</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna R 316TX AWD Rider | Front Mower – Base unit without cutting deck</h2>

<p class="mb-3">Compact, extremely powerful and flexible all-wheel drive rider with a powerful V-Twin engine and a choice of cutting decks, BioClip (mulching) and rear discharge. Equipped with an intuitive display, dual headlights and Bluetooth connectivity for Husqvarna Connect.</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Kawasaki</li>
  <li><strong>Engine model</strong> – FS Series V-Twin FS481V</li>
  <li><strong>Number of cylinders</strong> – 2</li>
  <li><strong>Displacement</strong> – 603 cm³</li>
  <li><strong>Engine power</strong> – 11.9 kW / 16.2 hp at 3600 rpm</li>
  <li><strong>Rated power</strong> – 9.6 kW / 13.1 hp at 2900 rpm</li>
  <li><strong>Fuel tank</strong> – 12 litres</li>
  <li><strong>Transmission</strong> – Hydrostatic, AWD</li>
  <li><strong>Steering</strong> – Articulated</li>
  <li><strong>Tyres</strong> – 170/60-8″</li>
  <li><strong>Dimensions (L×W×H)</strong> – 202 × 89 × 118 cm</li>
</ul>`,
    price_eur: 5188.00,
    image_url: "/25-1.webp",
    gallery: ["/25-1.webp", "/25-2.webp", "/25-3.webp", "/25-4.webp"],
    is_hot: true,
    stock: 97,
    created_at: "2026-06-06T10:00:00Z",
  },
  {
    id: "prod-26",
    slug: "husqvarna-rasentraktor-tc-138l-winterpaket-modell-2023",
    category_id: "cat-2",
    name_de: "Husqvarna Rasentraktor TC 138L Winterpaket mit Schneeschild, Gummileiste, Gewicht und Schneeketten – Modell 2023",
    name_fr: "Husqvarna Tracteur tondeuse TC 138L Pack Hiver avec lame à neige, bande caoutchouc, poids et chaînes – Modèle 2023",
    name_en: "Husqvarna Lawn Tractor TC 138L Winter Package with Snow Blade, Rubber Strip, Weight and Snow Chains – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rasentraktor TC 138L Winterpaket – Modell 2023</h2>

<p class="mb-3">Der Husqvarna TC 138L ist ein leistungsstarker Rasentraktor mit 97 cm Schnittbreite, Hydrostatgetriebe und 220 Liter Grasfangkorb. Das Winterpaket umfasst Schneeschild, Gummileiste, Gewicht und Schneeketten für den ganzjährigen Einsatz.</p>

<h3 class="font-semibold mb-2 mt-5">Motor & Ausstattung</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Husqvarna</li>
  <li><strong>Motorbezeichnung</strong> – Husqvarna-Serie</li>
  <li><strong>Anzahl Zylinder</strong> – 1</li>
  <li><strong>Hubraum</strong> – 452 cm³</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Motorleistung</strong> – 12,3 kW / 16,8 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 8,9 kW / 12,1 PS bei 2600 U/min</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe mit Handbedienung</li>
  <li><strong>Anzahl Gänge (V/R)</strong> – Stufenlos</li>
  <li><strong>Max. Geschwindigkeit</strong> – 6,7 km/h</li>
  <li><strong>Kraftstofftank</strong> – 5,7 Liter</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Art der Motorschmierung</strong> – Öldruckumlaufschmierung mit Ölfilter</li>
  <li><strong>Lenkungsmechanismus</strong> – Vorderrad-Lenkung</li>
  <li><strong>Reifengröße hinten</strong> – 18×8,50-8″</li>
  <li><strong>Reifengröße vorne</strong> – 15×6,00-6″</li>
  <li><strong>Reifenprofil</strong> – Rasenprofil</li>
  <li><strong>Verstellbares Lenkrad</strong> – Ja</li>
  <li><strong>Wendekreis</strong> – 40 cm</li>
  <li><strong>Vorderachse pendelnd</strong> – Ja</li>
  <li><strong>Material Achse</strong> – Vorne und hinten: Stahl</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Mähdaten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Schnittbreite</strong> – 97 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Schnitthöhen</strong> – 38–102 mm</li>
  <li><strong>Anzahl Schnitthöhen</strong> – 6</li>
  <li><strong>Schnitthöhenverstellung</strong> – Manuell</li>
  <li><strong>Volumen Fangkorb</strong> – 220 Liter</li>
  <li><strong>Mähmethoden</strong> – Fangen, Mulchen, Heck-Schwadablage</li>
  <li><strong>Mulchkit</strong> – Mulchstopfen als Zubehör erhältlich</li>
  <li><strong>Fangen</strong> – Ja</li>
  <li><strong>Heckauswurf-Schwadablage</strong> – Ja, Heckdeflektor optional</li>
  <li><strong>Luftleitsystem</strong> – Husqvarna Air Induction™</li>
  <li><strong>Füllstandsanzeige</strong> – Akustisch</li>
  <li><strong>Mähwerkseinschaltung</strong> – Manuell</li>
  <li><strong>Wasserschlauchanschluss</strong> – Ja</li>
  <li><strong>Mähwerkstyp</strong> – Gestanzt</li>
  <li><strong>Anzahl Führungsräder Mähwerk</strong> – 2</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Komfort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Betriebsstundenzähler</strong> – Mit Servicealarm</li>
  <li><strong>Sitz</strong> – Standard</li>
  <li><strong>Sitzfederung</strong> – Parallelfederung</li>
  <li><strong>Sitzverstellung</strong> – Einhandhebel</li>
  <li><strong>Scheinwerfer</strong> – Ja</li>
  <li><strong>Zugöse</strong> – Im Lieferumfang enthalten</li>
  <li><strong>Getränkehalter</strong> – Ja</li>
  <li><strong>Stoßfänger</strong> – Als Zubehör erhältlich</li>
  <li><strong>Batterieladegerät</strong> – Als Zubehör erhältlich</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Maße & Gewicht</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Abmessungen (L×B×H)</strong> – 240 × 102 × 88 cm</li>
  <li><strong>Garantie</strong> – 2 Jahre bei privater Nutzung</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 84 dB(A)</li>
  <li><strong>Gewicht</strong> – 217 kg</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
  <li><strong>Vibration am Sitz</strong> – 0,13 m/s²</li>
  <li><strong>Vibration am Lenkrad</strong> – 3,87 m/s²</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Bedienungsanleitung Gerät – 1</li>
  <li>Grasfangkorb – 1</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tracteur tondeuse TC 138L Pack Hiver – Modèle 2023</h2>

<p class="mb-3">Le Husqvarna TC 138L est un tracteur tondeuse puissant avec une largeur de coupe de 97 cm, transmission hydrostatique et bac de ramassage de 220 litres. Le pack hiver comprend une lame à neige, une bande caoutchouc, un poids et des chaînes à neige.</p>

<h3 class="font-semibold mb-2 mt-5">Moteur & Équipement</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Husqvarna</li>
  <li><strong>Modèle moteur</strong> – Husqvarna-Série</li>
  <li><strong>Cylindrée</strong> – 452 cm³</li>
  <li><strong>Puissance moteur</strong> – 12,3 kW / 16,8 ch à 3600 tr/min</li>
  <li><strong>Puissance nominale</strong> – 8,9 kW / 12,1 ch à 2600 tr/min</li>
  <li><strong>Transmission</strong> – Hydrostatique manuelle</li>
  <li><strong>Vitesse max.</strong> – 6,7 km/h</li>
  <li><strong>Réservoir</strong> – 5,7 litres</li>
  <li><strong>Largeur de coupe</strong> – 97 cm</li>
  <li><strong>Hauteur de coupe</strong> – 38–102 mm, 6 positions</li>
  <li><strong>Volume du bac</strong> – 220 litres</li>
  <li><strong>Poids</strong> – 217 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Lawn Tractor TC 138L Winter Package – Model 2023</h2>

<p class="mb-3">The Husqvarna TC 138L is a powerful lawn tractor with a 97 cm cutting width, hydrostatic transmission and 220 litre grass collector. The winter package includes a snow blade, rubber strip, weight and snow chains for year-round use.</p>

<h3 class="font-semibold mb-2 mt-5">Engine & Equipment</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Husqvarna</li>
  <li><strong>Engine model</strong> – Husqvarna Series</li>
  <li><strong>Displacement</strong> – 452 cm³</li>
  <li><strong>Engine power</strong> – 12.3 kW / 16.8 hp at 3600 rpm</li>
  <li><strong>Rated power</strong> – 8.9 kW / 12.1 hp at 2600 rpm</li>
  <li><strong>Transmission</strong> – Hydrostatic hand control</li>
  <li><strong>Max. speed</strong> – 6.7 km/h</li>
  <li><strong>Fuel tank</strong> – 5.7 litres</li>
  <li><strong>Cutting width</strong> – 97 cm</li>
  <li><strong>Cutting height</strong> – 38–102 mm, 6 positions</li>
  <li><strong>Collector volume</strong> – 220 litres</li>
  <li><strong>Weight</strong> – 217 kg</li>
</ul>`,
    price_eur: 2599.00,
    image_url: "/26-1.webp",
    gallery: ["/26-1.webp", "/26-2.webp", "/26-3.webp", "/26-4.webp"],
    is_hot: true,
    stock: 98,
    created_at: "2026-06-07T10:00:00Z",
  },
  {
    id: "prod-27",
    slug: "husqvarna-rasentraktor-tc-238t-mit-schneeschild-120plus-modell-2023",
    category_id: "cat-2",
    name_de: "HUSQVARNA Rasentraktor TC 238T – mit Schneeschild 120Plus – Modell 2023",
    name_fr: "HUSQVARNA Tracteur tondeuse TC 238T – avec lame à neige 120Plus – Modèle 2023",
    name_en: "HUSQVARNA Lawn Tractor TC 238T – with Snow Blade 120Plus – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA Rasentraktor TC 238T – Winterpaket 120 Plus</h2>

<p class="mb-3">Der neue Husqvarna Rasentraktor TC 238T ist ideal für Hausbesitzer und Grundbesitzer mit größeren Gärten. Der geräumige, integrierte Sammelbehälter lässt sich bequem vom Fahrersitz leeren. Ausgestattet mit einem kraftvollen Zweizylinder-Briggs&Stratton Motor mit 656 ccm, integriertem 320 L Fangsystem, pedalbetriebenem hydrostatischem Getriebe und Low-Vibe-Deck-Antrieb. BioClip® vom verstellbaren 15″ Sitz und dem ergonomischen Lenkrad.</p>

<p class="mb-3"><strong>Winterpaket 120 Plus:</strong> Schneeschild 120 cm Plus mit Verstellhebel, Gummileiste</p>

<h3 class="font-semibold mb-2 mt-5">Produkteigenschaften</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Start ohne Choke</strong> – Dank Auto Choke leicht zu bedienen</li>
  <li><strong>Pedalgesteuertes Hydrostatikgetriebe</strong> – Separate Pedale zum Vorwärts- und Rückwärtsfahren</li>
  <li><strong>Robuste Sammelschnittstelle</strong> – Hochwertige Stahlrückplatte und Verriegelungsmechanismus</li>
  <li><strong>Gusseiserne Vorderachse</strong> – Sehr gute Balance und Stabilität, auch mit Grasfangbox</li>
  <li><strong>Verstärktes Mähdeck</strong> – Pulverbeschichtet für mehr Festigkeit und Korrosionswiderstand</li>
  <li><strong>Hoher Komfort Rücksitz</strong> – Zusätzlicher Komfort, kann mit Armlehnen ergänzt werden</li>
  <li><strong>Robustes Stahlchassis</strong> – Erhöht Haltbarkeit und Stabilität</li>
  <li><strong>Am Kotflügel montierte Schnitthöhenverstellung</strong> – Federgestütztes Mähdeck</li>
  <li><strong>Air Induction</strong> – Luftstrom richtet Gras auf für hervorragende Mähergebnisse</li>
  <li><strong>Offener Durchstieg</strong> – Bequemer Ein- und Ausstieg</li>
  <li><strong>Leicht verstellbarer Sitz</strong> – Nach vorne/hinten und aufwärts/abwärts</li>
  <li><strong>Reinigungsanschluss am Mähwerk</strong> – Wasserschlauch anschließen und reinigen</li>
  <li><strong>Stützräder</strong> – Minimieren Risiko von Rasenbeschädigung auf unebenem Gelände</li>
  <li><strong>Grasfangbox 320 l</strong> – Vom Fahrersitz leicht zu entleeren</li>
  <li><strong>Doppeltes Lenkseil</strong> – Kleinerer Wendekreis und verbesserte Manövrierfähigkeit</li>
  <li><strong>Pulverbeschichtetes Mähdeck</strong> – Erhöhte Haltbarkeit und Rostbeständigkeit</li>
  <li><strong>Sammelbehälter Füllstandsanzeige</strong> – Zeigt an, wann entleert werden muss</li>
  <li><strong>Scheinwerfer</strong> – Erleichtert Arbeiten während der Dunkelheit</li>
  <li><strong>Rückwärtsfahrsystem (ROS)</strong> – Deaktiviert Schneidmesser beim Rückwärtsfahren</li>
  <li><strong>Sicherheitsschalter unter dem Sitz</strong> – Automatische Abschaltung bei Verlassen des Sitzes</li>
  <li><strong>Ganzjahreseinsatz</strong> – Anhänger, Schneeräumschilder, Kehrbürsten u. v. m.</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motorhersteller</strong> – Briggs & Stratton</li>
  <li><strong>Motor</strong> – Endurance Series V-Twin</li>
  <li><strong>Hubraum</strong> – 656 ccm</li>
  <li><strong>Nettoleistung</strong> – 10,08 kW bei 2.600 U/min</li>
  <li><strong>Zylinder</strong> – 2</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Tankvolumen</strong> – 9,5 Liter</li>
  <li><strong>Ölfilter</strong> – Ja</li>
  <li><strong>Schnittbreite</strong> – 97 cm</li>
  <li><strong>Schnitthöhenverstellung</strong> – 38–102 mm</li>
  <li><strong>Stützräder</strong> – 2</li>
  <li><strong>Getriebeart</strong> – Hydrostatisch</li>
  <li><strong>Getriebehersteller</strong> – Tuff Torq</li>
  <li><strong>Antrieb</strong> – Pedalgesteuert</li>
  <li><strong>Vorwärtsgeschwindigkeit</strong> – 0 – 6,7 km/h</li>
  <li><strong>Rückwärtsgeschwindigkeit</strong> – 0 – 1,6 km/h</li>
  <li><strong>Sitz Material</strong> – Vinyl</li>
  <li><strong>Sitz Rückenlehnenhöhe</strong> – Hoch</li>
  <li><strong>Lenkrad</strong> – Soft Grip</li>
  <li><strong>Betriebsstundenzähler</strong> – Digital mit vorprogrammierten Serviceintervallen</li>
  <li><strong>Grasfangbox</strong> – Enthalten, 320 l</li>
  <li><strong>Deflektor</strong> – Optionales Zubehör</li>
  <li><strong>Mulchkit</strong> – Optionales Zubehör</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 98 dB(A)</li>
  <li><strong>Schallleistungspegel LWA</strong> – 100 dB(A)</li>
  <li><strong>Vibration Lenkrad</strong> – 3,87 m/s²</li>
  <li><strong>Vibration Sitz</strong> – 0,13 m/s²</li>
</ul>

<p class="mb-3 mt-4"><strong>Betriebsart:</strong> Benzin | <strong>Schnittbreite:</strong> 92–98 cm | <strong>Getriebeart:</strong> Hydrostat | <strong>Motorvariante:</strong> 2 Zylinder | <strong>Antriebsart:</strong> Heckantrieb</p>

<p class="mb-3"><strong>Husqvarna PDI:</strong> Wir sind ein autorisierter Husqvarna Fachhändler. Entsprechend der Husqvarna Herstellervorgaben wird durch uns als Husqvarna Vertragshändler mit eigener Werkstatt die geforderte PDI (Pre Delivery Inspection) durchgeführt.</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA Tracteur tondeuse TC 238T – Pack Hiver 120 Plus</h2>

<p class="mb-3">Le nouveau tracteur tondeuse Husqvarna TC 238T est idéal pour les propriétaires de grands jardins. Le bac de ramassage spacieux intégré se vide facilement depuis le siège conducteur. Équipé d'un puissant moteur bicylindre Briggs & Stratton de 656 cm³, système de ramassage intégré de 320 L, transmission hydrostatique à pédale et entraînement Low-Vibe. BioClip® depuis le siège réglable 15″ et volant ergonomique.</p>

<p class="mb-3"><strong>Pack Hiver 120 Plus :</strong> Lame à neige 120 cm Plus avec levier de réglage, bande caoutchouc</p>

<h3 class="font-semibold mb-2 mt-5">Caractéristiques</h3>
<ul class="space-y-1 mb-3">
  <li>Démarrage sans starter (Auto Choke)</li>
  <li>Transmission hydrostatique à pédale</li>
  <li>Système de ramassage robuste avec plaque arrière en acier</li>
  <li>Essieu avant en fonte pour stabilité optimale</li>
  <li>Plateau de coupe renforcé revêtu par poudre</li>
  <li>Siège haut confort avec repose-bras optionnels</li>
  <li>Châssis en acier robuste</li>
  <li>Air Induction pour des résultats de tonte parfaits</li>
  <li>Bac de ramassage de 320 L vidable depuis le siège</li>
  <li>Phares pour le travail à l'obscurité</li>
  <li>Système ROS désactivant les lames en marche arrière</li>
  <li>Contact de sécurité sous le siège</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Briggs & Stratton Endurance Series V-Twin, 656 cm³</li>
  <li><strong>Puissance nette</strong> – 10,08 kW à 2.600 tr/min</li>
  <li><strong>Réservoir</strong> – 9,5 litres</li>
  <li><strong>Largeur de coupe</strong> – 97 cm</li>
  <li><strong>Hauteur de coupe</strong> – 38–102 mm</li>
  <li><strong>Transmission</strong> – Hydrostatique Tuff Torq</li>
  <li><strong>Vitesse avant/arrière</strong> – 0 – 6,7 / 0 – 1,6 km/h</li>
  <li><strong>Bac</strong> – 320 litres</li>
  <li><strong>Poids</strong> – Non spécifié</li>
  <li><strong>Niveau sonore</strong> – 100 dB(A)</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA Lawn Tractor TC 238T – Winter Package 120 Plus</h2>

<p class="mb-3">The new Husqvarna TC 238T lawn tractor is ideal for homeowners with larger gardens. The spacious integrated collector can be emptied conveniently from the driver's seat. Equipped with a powerful Briggs & Stratton V-twin engine (656 cc), integrated 320 L collection system, pedal-operated hydrostatic transmission and Low-Vibe deck drive. BioClip® from the adjustable 15″ seat and ergonomic steering wheel.</p>

<p class="mb-3"><strong>Winter Package 120 Plus:</strong> Snow blade 120 cm Plus with adjustment lever, rubber strip</p>

<h3 class="font-semibold mb-2 mt-5">Features</h3>
<ul class="space-y-1 mb-3">
  <li>No-choke start (Auto Choke)</li>
  <li>Pedal-controlled hydrostatic transmission</li>
  <li>Robust collection system with steel back plate</li>
  <li>Cast iron front axle for excellent stability</li>
  <li>Reinforced powder-coated cutting deck</li>
  <li>High-back comfort seat with optional armrests</li>
  <li>Robust steel chassis</li>
  <li>Air Induction for perfect cutting results</li>
  <li>320 L grass collector, emptiable from the seat</li>
  <li>Headlights for working in the dark</li>
  <li>ROS system disables blades when reversing</li>
  <li>Seat safety switch</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Briggs & Stratton Endurance Series V-Twin, 656 cc</li>
  <li><strong>Net power</strong> – 10.08 kW at 2.600 rpm</li>
  <li><strong>Fuel tank</strong> – 9.5 litres</li>
  <li><strong>Cutting width</strong> – 97 cm</li>
  <li><strong>Cutting height</strong> – 38–102 mm</li>
  <li><strong>Transmission</strong> – Tuff Torq hydrostatic</li>
  <li><strong>Forward/reverse speed</strong> – 0 – 6.7 / 0 – 1.6 km/h</li>
  <li><strong>Collector</strong> – 320 litres</li>
  <li><strong>Noise level</strong> – 100 dB(A)</li>
</ul>`,
    price_eur: 3219.00,
    image_url: "/27-1.jpg",
    gallery: ["/27-1.jpg", "/27-2.jpg", "/27-3.jpg", "/27-4.jpg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-06-08T10:00:00Z",
  },
  {
    id: "prod-28",
    slug: "husqvarna-rasentraktor-tc-238tx-winterpaket-modell-2023",
    category_id: "cat-2",
    name_de: "Husqvarna Rasentraktor TC 238TX Winterpaket mit Schneeschild, Gummileiste, Gewicht und Schneeketten – Modell 2023",
    name_fr: "Husqvarna Tracteur tondeuse TC 238TX Pack Hiver avec lame à neige, bande caoutchouc, poids et chaînes – Modèle 2023",
    name_en: "Husqvarna Lawn Tractor TC 238TX Winter Package with Snow Blade, Rubber Strip, Weight and Snow Chains – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rasentraktor TC 238TX Winterpaket – Modell 2023</h2>

<p class="mb-3">Der Husqvarna TC 238TX ist ein leistungsstarker Rasentraktor mit 97 cm Schnittbreite, Fußhydrostat-Getriebe und 320 Liter Grasfangkorb. Angetrieben von einem 656 cm³ V-Twin Motor mit 19 PS. Das Winterpaket umfasst Schneeschild, Gummileiste, Gewicht und Schneeketten für den ganzjährigen Einsatz.</p>

<h3 class="font-semibold mb-2 mt-5">Motor & Ausstattung</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Husqvarna</li>
  <li><strong>Motorbezeichnung</strong> – V-Twin (B&S)/656</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Hubraum</strong> – 656 cm³</li>
  <li><strong>Kühlsystem</strong> – Luftgekühlt</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Motorleistung</strong> – 14 kW / 19 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 10,1 kW / 13,7 PS bei 2600 U/min</li>
  <li><strong>Getriebe</strong> – Fußhydrostat</li>
  <li><strong>Kraftstofftank</strong> – 13,3 Liter</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Choke</strong> – Autochoke</li>
  <li><strong>Art der Motorschmierung</strong> – Öldruckumlaufschmierung mit Ölfilter</li>
  <li><strong>Lenkungsmechanismus</strong> – Vorderrad-Lenkung</li>
  <li><strong>Reifengröße hinten</strong> – 18×9,50″</li>
  <li><strong>Reifengröße vorne</strong> – 15×6,00″</li>
  <li><strong>Reifenprofil</strong> – Rasenprofil</li>
  <li><strong>Vorderachse pendelnd</strong> – Ja</li>
  <li><strong>Material Achse</strong> – Vorne: Guss; hinten Stahl</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Motorhaube</strong> – Stahl</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Mähdaten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Schnittbreite</strong> – 97 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Schnitthöhen</strong> – 38–102 mm</li>
  <li><strong>Schnitthöhenverstellung</strong> – Manuell</li>
  <li><strong>Volumen Fangkorb</strong> – 320 Liter</li>
  <li><strong>Mähmethoden</strong> – Mulchen, Heckauswurf-Schwadablage</li>
  <li><strong>Mulchkit</strong> – BioClip im Lieferumfang enthalten</li>
  <li><strong>Fangen</strong> – Ja</li>
  <li><strong>Heckauswurf-Schwadablage</strong> – Ja, Heckdeflektor optional</li>
  <li><strong>Luftleitsystem</strong> – Husqvarna Air Induction™</li>
  <li><strong>Füllstandsanzeige</strong> – Akustisch</li>
  <li><strong>Mähwerkseinschaltung</strong> – Elektromagnetisch</li>
  <li><strong>Fangkorbentleerung</strong> – Manuell vom Sitz aus über Teleskopstange</li>
  <li><strong>Wasserschlauchanschluss</strong> – Ja</li>
  <li><strong>Mähwerkstyp</strong> – Gestanzt, verstärkt</li>
  <li><strong>Anzahl Führungsräder Mähwerk</strong> – 2</li>
  <li><strong>Mähen im Rückwärtsgang</strong> – Ja</li>
  <li><strong>Material Rückwand</strong> – Stahl</li>
  <li><strong>Bioclip</strong> – Zuschaltung vom Sitz</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Komfort</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Betriebsstundenzähler</strong> – Mit Servicealarm</li>
  <li><strong>Sitz</strong> – Großer Deluxe Komfortsitz</li>
  <li><strong>Scheinwerfer</strong> – LED</li>
  <li><strong>Getränkehalter</strong> – Ja</li>
  <li><strong>Stoßfänger</strong> – Ja</li>
  <li><strong>Tempomat</strong> – Nein</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Maße & Gewicht</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Abmessungen (L×B×H)</strong> – 240 × 127 × 102 cm</li>
  <li><strong>Garantie</strong> – 2 Jahre bei privater Nutzung</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 94 dB(A)</li>
  <li><strong>Gewicht</strong> – 265 kg</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Bedienungsanleitung Gerät – 1</li>
  <li>Zündschlüssel – 2</li>
  <li>Grasfangkorb – 1</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tracteur tondeuse TC 238TX Pack Hiver – Modèle 2023</h2>

<p class="mb-3">Le Husqvarna TC 238TX est un tracteur tondeuse puissant avec une largeur de coupe de 97 cm, transmission hydrostatique à pédale et bac de ramassage de 320 litres. Motorisé par un V-Twin de 656 cm³ développant 19 ch. Le pack hiver comprend lame à neige, bande caoutchouc, poids et chaînes.</p>

<h3 class="font-semibold mb-2 mt-5">Moteur & Équipement</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marque moteur</strong> – Husqvarna</li>
  <li><strong>Modèle</strong> – V-Twin (B&S)/656</li>
  <li><strong>Cylindrée</strong> – 656 cm³</li>
  <li><strong>Puissance moteur</strong> – 14 kW / 19 ch à 3600 tr/min</li>
  <li><strong>Puissance nominale</strong> – 10,1 kW / 13,7 ch à 2600 tr/min</li>
  <li><strong>Transmission</strong> – Hydrostatique à pédale</li>
  <li><strong>Réservoir</strong> – 13,3 litres</li>
  <li><strong>Largeur de coupe</strong> – 97 cm</li>
  <li><strong>Volume du bac</strong> – 320 litres</li>
  <li><strong>Poids</strong> – 265 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Lawn Tractor TC 238TX Winter Package – Model 2023</h2>

<p class="mb-3">The Husqvarna TC 238TX is a powerful lawn tractor with a 97 cm cutting width, foot-operated hydrostatic transmission and 320 litre grass collector. Powered by a 656 cm³ V-Twin engine delivering 19 hp. The winter package includes a snow blade, rubber strip, weight and snow chains.</p>

<h3 class="font-semibold mb-2 mt-5">Engine & Equipment</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine brand</strong> – Husqvarna</li>
  <li><strong>Engine model</strong> – V-Twin (B&S)/656</li>
  <li><strong>Displacement</strong> – 656 cm³</li>
  <li><strong>Engine power</strong> – 14 kW / 19 hp at 3600 rpm</li>
  <li><strong>Rated power</strong> – 10.1 kW / 13.7 hp at 2600 rpm</li>
  <li><strong>Transmission</strong> – Foot hydrostatic</li>
  <li><strong>Fuel tank</strong> – 13.3 litres</li>
  <li><strong>Cutting width</strong> – 97 cm</li>
  <li><strong>Collector volume</strong> – 320 litres</li>
  <li><strong>Weight</strong> – 265 kg</li>
</ul>`,
    price_eur: 3738.00,
    image_url: "/28-1.webp",
    gallery: ["/28-1.webp", "/28-2.webp", "/28-3.webp", "/28-4.webp"],
    is_hot: true,
    stock: 96,
    created_at: "2026-06-09T10:00:00Z",
  },
  {
    id: "prod-29",
    slug: "husqvarna-rasentraktor-tc-242t-modell-2023",
    category_id: "cat-2",
    name_de: "Husqvarna Rasentraktor TC 242T – Modell 2023",
    name_fr: "Husqvarna Tracteur tondeuse TC 242T – Modèle 2023",
    name_en: "Husqvarna Lawn Tractor TC 242T – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rasentraktor TC 242T – Modell 2023</h2>

<p class="mb-3">Dieses Produkt wird vor Auslieferung einer kostenlosen Übergabeinspektion gemäß Husqvarna „Pre-Delivery-Inspection"-Richtlinien unterzogen. Das Produkt wird montiert, betriebsbereit und inklusive des Husqvarna Protokolls zur Übergabeinspektion an Ihre Adresse geliefert.</p>

<h3 class="font-semibold mb-2 mt-5">Vorteile</h3>
<ul class="space-y-1 mb-3">
  <li>Besonders laufruhiger, vibrationsarmer und langlebiger Motor durch 2-Zylinder-Technik</li>
  <li>Hydrostat-Getriebe ermöglicht Geschwindigkeitsveränderung sowie Wechsel zwischen vorwärts und rückwärts ohne Schalten oder Kuppeln</li>
  <li>Stufenlose Wahl der Fahrgeschwindigkeit</li>
  <li>Bequemes Anlassen des Motors per Zündschlüssel</li>
  <li>Einfaches Reinigen des Mähwerks über die Mähwerk-Waschdüse</li>
  <li>Warnsignal bei vollem Fangkorb</li>
  <li>Pendelnde Vorderachse für gleichmäßiges Schnittbild auch bei leichten Unebenheiten</li>
  <li>Husqvarna Air Induction™ Luftleitsystem richtet Grashalme vor dem Abmähen auf</li>
  <li>Führungsräder verhindern Aufsetzen der Messer bei unebenem Gelände</li>
  <li>Scheinwerfer für Arbeiten in der Dämmerung</li>
  <li>Betriebsstundenzähler mit Servicealarm</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Husqvarna</li>
  <li><strong>Motorbezeichnung</strong> – V-Twin (B&S)/656</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Hubraum</strong> – 656 cm³</li>
  <li><strong>Motorleistung</strong> – 14 kW / 19 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 10,1 kW / 13,7 PS bei 2600 U/min</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Kraftstofftank</strong> – 9,5 Liter</li>
  <li><strong>Getriebe</strong> – Hydrostatgetriebe</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Reifengröße vorne</strong> – 15×6,00″</li>
  <li><strong>Reifengröße hinten</strong> – 18×8,50″</li>
  <li><strong>Wendekreis</strong> – 40 cm</li>
  <li><strong>Vorderachse pendelnd</strong> – Ja</li>
  <li><strong>Material Achse</strong> – Vorne: Guss; hinten Stahl</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Motorhaube</strong> – Stahl</li>
  <li><strong>Schnittbreite</strong> – 108 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Schnitthöhen</strong> – 38–102 mm</li>
  <li><strong>Schnitthöhenverstellung</strong> – Zentral</li>
  <li><strong>Volumen Fangkorb</strong> – 320 Liter</li>
  <li><strong>Mähmethoden</strong> – Mulchen, Heckauswurf-Schwadablage</li>
  <li><strong>Luftleitsystem</strong> – Husqvarna Air Induction™</li>
  <li><strong>Füllstandsanzeige</strong> – Akustisch</li>
  <li><strong>Mähwerkseinschaltung</strong> – Manuell</li>
  <li><strong>Fangkorbentleerung</strong> – Vom Sitz aus über Teleskopstange</li>
  <li><strong>Wasserschlauchanschluss</strong> – Ja</li>
  <li><strong>Anzahl Führungsräder</strong> – 2</li>
  <li><strong>Mähen im Rückwärtsgang</strong> – Ja</li>
  <li><strong>Sitz</strong> – Hohe Rückenlehne</li>
  <li><strong>Betriebsstundenzähler</strong> – Mit Servicealarm</li>
  <li><strong>Scheinwerfer</strong> – Ja</li>
  <li><strong>Gewicht</strong> – 287 kg</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 240 × 110 × 127 cm</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
  <li><strong>Garantie</strong> – 2 Jahre bei privater Nutzung</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 84 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Grasfangkorb – 1</li>
  <li>Zündschlüssel – 2</li>
  <li>Bedienungsanleitung Gerät – 1</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tracteur tondeuse TC 242T – Modèle 2023</h2>

<p class="mb-3">Ce produit est soumis avant livraison à une inspection gratuite conformément aux directives Husqvarna PDI. Livré monté, prêt à l'emploi avec le protocole Husqvarna.</p>

<h3 class="font-semibold mb-2 mt-5">Avantages</h3>
<ul class="space-y-1 mb-3">
  <li>Moteur bicylindre silencieux, à faibles vibrations et durable</li>
  <li>Transmission hydrostatique pour changement de vitesse et direction sans embrayage</li>
  <li>Réglage en continu de la vitesse</li>
  <li>Démarrage par clé</li>
  <li>Raccord de lavage du plateau</li>
  <li>Signal d'avertissement bac plein</li>
  <li>Essieu avant pendulaire pour une coupe uniforme</li>
  <li>Système Air Induction™ redresse l'herbe avant la coupe</li>
  <li>Roulettes anti-scalp</li>
  <li>Phare pour le travail à l'aube/crépuscule</li>
  <li>Compteur horaire avec alarme d'entretien</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Husqvarna V-Twin (B&S)/656, 656 cm³, 19 ch</li>
  <li><strong>Réservoir</strong> – 9,5 litres</li>
  <li><strong>Transmission</strong> – Hydrostatique</li>
  <li><strong>Largeur de coupe</strong> – 108 cm</li>
  <li><strong>Volume du bac</strong> – 320 litres</li>
  <li><strong>Poids</strong> – 287 kg</li>
  <li><strong>Garantie</strong> – 2 ans privé</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Lawn Tractor TC 242T – Model 2023</h2>

<p class="mb-3">This product undergoes a free pre-delivery inspection in accordance with Husqvarna PDI guidelines. Delivered assembled, ready for use, with the Husqvarna inspection protocol.</p>

<h3 class="font-semibold mb-2 mt-5">Advantages</h3>
<ul class="space-y-1 mb-3">
  <li>Particularly quiet, low-vibration and durable 2-cylinder engine</li>
  <li>Hydrostatic transmission for speed/direction changes without clutching</li>
  <li>Continuously variable speed</li>
  <li>Key-start ignition</li>
  <li>Deck wash nozzle for easy cleaning</li>
  <li>Warning signal when collector is full</li>
  <li>Pendulum front axle for even cutting on uneven ground</li>
  <li>Air Induction™ system lifts grass before cutting</li>
  <li>Anti-scalp wheels prevent blade contact with ground</li>
  <li>Headlight for working in twilight</li>
  <li>Hour meter with service alarm</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Husqvarna V-Twin (B&S)/656, 656 cc, 19 hp</li>
  <li><strong>Fuel tank</strong> – 9.5 litres</li>
  <li><strong>Transmission</strong> – Hydrostatic</li>
  <li><strong>Cutting width</strong> – 108 cm</li>
  <li><strong>Collector volume</strong> – 320 litres</li>
  <li><strong>Weight</strong> – 287 kg</li>
  <li><strong>Warranty</strong> – 2 years private use</li>
</ul>`,
    price_eur: 2383.00,
    image_url: "/29.jpg",
    gallery: ["/29.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-10T10:00:00Z",
  },
  {
    id: "prod-30",
    slug: "husqvarna-rasentraktor-ts-146txd-modell-2023",
    category_id: "cat-2",
    name_de: "Husqvarna Rasentraktor TS 146TXD – Modell 2023",
    name_fr: "Husqvarna Tracteur tondeuse TS 146TXD – Modèle 2023",
    name_en: "Husqvarna Lawn Tractor TS 146TXD – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rasentraktor TS 146TXD – Modell 2023</h2>

<p class="mb-3">Dieses Produkt wird vor Auslieferung einer kostenlosen Übergabeinspektion gemäß Husqvarna „Pre-Delivery-Inspection"-Richtlinien unterzogen. Das Produkt wird montiert, betriebsbereit und inklusive des Husqvarna Protokolls zur Übergabeinspektion an Ihre Adresse geliefert.</p>

<h3 class="font-semibold mb-2 mt-5">Vorteile</h3>
<ul class="space-y-1 mb-3">
  <li>Besonders laufruhiger, vibrationsarmer und langlebiger Motor durch 2-Zylinder-Technik</li>
  <li>Bequemes Anlassen des Motors per Zündschlüssel</li>
  <li>Einfaches Reinigen des Mähwerks über die Mähwerk-Waschdüse</li>
  <li>Pendelnde Vorderachse für gleichmäßiges Schnittbild auch bei Unebenheiten</li>
  <li>Mulchkit optional erhältlich – Schnittgut wird als natürlicher Dünger auf der Fläche verteilt</li>
  <li>CVT Getriebe – stufenloses Getriebe für weicheres Fahrgefühl</li>
  <li>Husqvarna Air Induction™ Luftleitsystem richtet Grashalme vor dem Abmähen auf</li>
  <li>Führungsräder verhindern Aufsetzen der Messer bei unebenem Gelände</li>
  <li>Tempomat für konstante Geschwindigkeit, auch an Steigungen</li>
  <li>LED-Scheinwerfer für Arbeiten in der Dämmerung</li>
  <li>Betriebsstundenzähler mit Servicealarm</li>
  <li>Auto Choke für zuverlässige Kalt- und Warmstarts</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Husqvarna</li>
  <li><strong>Motorbezeichnung</strong> – V-Twin (B&S)/656</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Hubraum</strong> – 656 cm³</li>
  <li><strong>Motorleistung</strong> – 14 kW / 19 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 10,1 kW / 13,7 PS bei 2600 U/min</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Kraftstofftank</strong> – 11,3 Liter</li>
  <li><strong>Choke</strong> – Autochoke</li>
  <li><strong>Getriebe</strong> – CVT (stufenlos)</li>
  <li><strong>Differentialsperre</strong> – Sperrdifferenzial</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Reifengröße vorne</strong> – 15×6,00″</li>
  <li><strong>Reifengröße hinten</strong> – 20×10,00″</li>
  <li><strong>Vorderachse pendelnd</strong> – Ja</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Motorhaube</strong> – Stahl</li>
  <li><strong>Schnittbreite</strong> – 117 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Schnitthöhen</strong> – 38–102 mm</li>
  <li><strong>Mähmethoden</strong> – Seitenauswurf, Mulchen, Fangen</li>
  <li><strong>Luftleitsystem</strong> – Husqvarna Air Induction™</li>
  <li><strong>Mähwerkseinschaltung</strong> – Manuell</li>
  <li><strong>Wasserschlauchanschluss</strong> – Ja</li>
  <li><strong>Anzahl Führungsräder</strong> – 4</li>
  <li><strong>Mähwerkstyp</strong> – ClearCut</li>
  <li><strong>Sitz</strong> – Deluxe Komfortsitz</li>
  <li><strong>Betriebsstundenzähler</strong> – Mit Servicealarm</li>
  <li><strong>Scheinwerfer</strong> – LED</li>
  <li><strong>Zugöse</strong> – Im Lieferumfang enthalten</li>
  <li><strong>Getränkehalter</strong> – Ja</li>
  <li><strong>Tempomat</strong> – Ja</li>
  <li><strong>Gewicht</strong> – 287 kg</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 178 × 145 × 127 cm</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
  <li><strong>Garantie</strong> – 2 Jahre bei privater Nutzung</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 84 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Zündschlüssel – 2</li>
  <li>Bedienungsanleitung Gerät – 1</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tracteur tondeuse TS 146TXD – Modèle 2023</h2>

<p class="mb-3">Ce produit est soumis avant livraison à une inspection gratuite conformément aux directives Husqvarna PDI. Livré monté, prêt à l'emploi avec le protocole Husqvarna.</p>

<h3 class="font-semibold mb-2 mt-5">Avantages</h3>
<ul class="space-y-1 mb-3">
  <li>Moteur bicylindre silencieux et durable</li>
  <li>Démarrage par clé</li>
  <li>Raccord de lavage du plateau</li>
  <li>Essieu avant pendulaire pour coupe uniforme</li>
  <li>Mulching optionnel</li>
  <li>Transmission CVT pour confort de conduite</li>
  <li>Système Air Induction™</li>
  <li>Roulettes anti-scalp</li>
  <li>Régulateur de vitesse</li>
  <li>Phare LED</li>
  <li>Compteur horaire avec alarme</li>
  <li>Auto Choke</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Husqvarna V-Twin (B&S)/656, 656 cm³, 19 ch</li>
  <li><strong>Réservoir</strong> – 11,3 litres</li>
  <li><strong>Transmission</strong> – CVT</li>
  <li><strong>Largeur de coupe</strong> – 117 cm</li>
  <li><strong>Poids</strong> – 287 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Lawn Tractor TS 146TXD – Model 2023</h2>

<p class="mb-3">This product undergoes a free pre-delivery inspection in accordance with Husqvarna PDI guidelines. Delivered assembled, ready for use, with the Husqvarna inspection protocol.</p>

<h3 class="font-semibold mb-2 mt-5">Advantages</h3>
<ul class="space-y-1 mb-3">
  <li>Quiet, low-vibration 2-cylinder engine</li>
  <li>Key-start ignition</li>
  <li>Deck wash nozzle</li>
  <li>Pendulum front axle for even cutting</li>
  <li>Optional mulching kit</li>
  <li>CVT transmission for smooth driving</li>
  <li>Air Induction™ system</li>
  <li>Anti-scalp wheels</li>
  <li>Cruise control</li>
  <li>LED headlight</li>
  <li>Hour meter with service alarm</li>
  <li>Auto Choke</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Husqvarna V-Twin (B&S)/656, 656 cc, 19 hp</li>
  <li><strong>Fuel tank</strong> – 11.3 litres</li>
  <li><strong>Transmission</strong> – CVT</li>
  <li><strong>Cutting width</strong> – 117 cm</li>
  <li><strong>Weight</strong> – 287 kg</li>
</ul>`,
    price_eur: 2439.00,
    image_url: "/30.jpg",
    gallery: ["/30.jpg"],
    is_hot: true,
    stock: 97,
    created_at: "2026-06-11T10:00:00Z",
  },
  {
    id: "prod-31",
    slug: "husqvarna-rasentraktor-ts-242txd-modell-2023",
    category_id: "cat-2",
    name_de: "Husqvarna Rasentraktor TS 242TXD – Modell 2023",
    name_fr: "Husqvarna Tracteur tondeuse TS 242TXD – Modèle 2023",
    name_en: "Husqvarna Lawn Tractor TS 242TXD – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rasentraktor TS 242TXD – Modell 2023</h2>

<p class="mb-3">Dieses Produkt wird vor Auslieferung einer kostenlosen Übergabeinspektion gemäß Husqvarna „Pre-Delivery-Inspection"-Richtlinien unterzogen. Das Produkt wird montiert, betriebsbereit und inklusive des Husqvarna Protokolls zur Übergabeinspektion an Ihre Adresse geliefert.</p>

<h3 class="font-semibold mb-2 mt-5">Vorteile</h3>
<ul class="space-y-1 mb-3">
  <li>Besonders laufruhiger, vibrationsarmer und langlebiger Motor durch 2-Zylinder-Technik</li>
  <li>Bequemes Anlassen des Motors per Zündschlüssel</li>
  <li>Einfaches Reinigen des Mähwerks über die Mähwerk-Waschdüse</li>
  <li>Pendelnde Vorderachse für gleichmäßiges Schnittbild auch bei Unebenheiten</li>
  <li>Mulchkit optional erhältlich – Schnittgut als natürlicher Dünger</li>
  <li>Husqvarna Air Induction™ Luftleitsystem richtet Grashalme vor dem Abmähen auf</li>
  <li>Führungsräder verhindern Aufsetzen der Messer bei unebenem Gelände</li>
  <li>Tempomat für konstante Geschwindigkeit, auch an Steigungen</li>
  <li>LED-Scheinwerfer für Arbeiten in der Dämmerung</li>
  <li>Robuste Stoßstange serienmäßig zum Schutz der Motorhaube</li>
  <li>Auto Choke für zuverlässige Kalt- und Warmstarts</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Marke Motor</strong> – Husqvarna</li>
  <li><strong>Motorbezeichnung</strong> – V-Twin (B&S)/724</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Hubraum</strong> – 724 cm³</li>
  <li><strong>Motorleistung</strong> – 22,6 kW / 30,7 PS bei 3600 U/min</li>
  <li><strong>Geräteleistung</strong> – 16,3 kW / 22,2 PS bei 2600 U/min</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Kraftstofftank</strong> – 15,1 Liter</li>
  <li><strong>Choke</strong> – Autochoke</li>
  <li><strong>Getriebe</strong> – Fußhydrostat</li>
  <li><strong>Differentialsperre</strong> – Sperrdifferenzial</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Reifengröße vorne</strong> – 15×6,00″</li>
  <li><strong>Reifengröße hinten</strong> – 20×10,00″</li>
  <li><strong>Vorderachse pendelnd</strong> – Ja</li>
  <li><strong>Bordspannung</strong> – 12 V</li>
  <li><strong>Schnittbreite</strong> – 107 cm</li>
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Schnitthöhenverstellung</strong> – Zentral</li>
  <li><strong>Mähmethoden</strong> – Seitenauswurf, Mulchen, Fangen</li>
  <li><strong>Luftleitsystem</strong> – Husqvarna Air Induction™</li>
  <li><strong>Mähwerkseinschaltung</strong> – Elektrisch</li>
  <li><strong>Wasserschlauchanschluss</strong> – Ja</li>
  <li><strong>Anzahl Führungsräder</strong> – 2</li>
  <li><strong>Mähwerkstyp</strong> – ClearCut</li>
  <li><strong>Sitz</strong> – Deluxe Komfortsitz</li>
  <li><strong>Sitzfederung</strong> – Parallelfederung</li>
  <li><strong>Sitzverstellung</strong> – Einhandhebel</li>
  <li><strong>Betriebsstundenzähler</strong> – Ja</li>
  <li><strong>Scheinwerfer</strong> – LED</li>
  <li><strong>Zugöse</strong> – Im Lieferumfang enthalten</li>
  <li><strong>Getränkehalter</strong> – Ja</li>
  <li><strong>Stoßfänger</strong> – Ja</li>
  <li><strong>Tempomat</strong> – Ja</li>
  <li><strong>Gewicht</strong> – 225 kg</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 178 × 124 × 127 cm</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
  <li><strong>Garantie</strong> – 2 Jahre bei privater Nutzung</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 85 dB(A)</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Bedienungsanleitung Gerät – 1</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tracteur tondeuse TS 242TXD – Modèle 2023</h2>

<p class="mb-3">Ce produit est soumis avant livraison à une inspection gratuite conformément aux directives Husqvarna PDI. Livré monté, prêt à l'emploi avec le protocole Husqvarna.</p>

<h3 class="font-semibold mb-2 mt-5">Avantages</h3>
<ul class="space-y-1 mb-3">
  <li>Moteur bicylindre silencieux et durable</li>
  <li>Démarrage par clé</li>
  <li>Raccord de lavage du plateau</li>
  <li>Essieu avant pendulaire</li>
  <li>Mulching optionnel</li>
  <li>Air Induction™</li>
  <li>Roulettes anti-scalp</li>
  <li>Régulateur de vitesse</li>
  <li>Phare LED</li>
  <li>Pare-chocs robuste de série</li>
  <li>Auto Choke</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Husqvarna V-Twin (B&S)/724, 724 cm³, 30,7 ch</li>
  <li><strong>Réservoir</strong> – 15,1 litres</li>
  <li><strong>Transmission</strong> – Hydrostatique à pédale</li>
  <li><strong>Largeur de coupe</strong> – 107 cm</li>
  <li><strong>Poids</strong> – 225 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Lawn Tractor TS 242TXD – Model 2023</h2>

<p class="mb-3">This product undergoes a free pre-delivery inspection in accordance with Husqvarna PDI guidelines. Delivered assembled, ready for use, with the Husqvarna inspection protocol.</p>

<h3 class="font-semibold mb-2 mt-5">Advantages</h3>
<ul class="space-y-1 mb-3">
  <li>Quiet, low-vibration 2-cylinder engine</li>
  <li>Key-start ignition</li>
  <li>Deck wash nozzle</li>
  <li>Pendulum front axle</li>
  <li>Optional mulching kit</li>
  <li>Air Induction™ system</li>
  <li>Anti-scalp wheels</li>
  <li>Cruise control</li>
  <li>LED headlight</li>
  <li>Sturdy front bumper standard</li>
  <li>Auto Choke</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Husqvarna V-Twin (B&S)/724, 724 cc, 30.7 hp</li>
  <li><strong>Fuel tank</strong> – 15.1 litres</li>
  <li><strong>Transmission</strong> – Foot hydrostatic</li>
  <li><strong>Cutting width</strong> – 107 cm</li>
  <li><strong>Weight</strong> – 225 kg</li>
</ul>`,
    price_eur: 2721.00,
    image_url: "/31.jpg",
    gallery: ["/31.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-12T10:00:00Z",
  },
  {
    id: "prod-32",
    slug: "husqvarna-rider-214c-aufsitzmaher-inklusive-94cm-mahdeck-angebot",
    category_id: "cat-2",
    name_de: "Husqvarna Rider 214C Aufsitzmäher inklusive 94cm Mähdeck – Super Angebot",
    name_fr: "Husqvarna Rider 214C Tracteur tondeuse avec plateau 94cm – Super Offre",
    name_en: "Husqvarna Rider 214C Ride-on Mower incl. 94cm Cutting Deck – Super Deal",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider 214C Aufsitzmäher inklusive 94cm Mähdeck – Super Angebot</h2>

<p class="mb-3"><strong>Super Angebot mit einem R214C!</strong></p>

<p class="mb-3">Im Lieferumfang enthalten:</p>
<ul class="space-y-1 mb-3">
  <li>120iB Kabelloser Laubbläser</li>
  <li>Bli20 Akku</li>
  <li>QC80 Akku-Ladegerät</li>
  <li>Anhänger perfekt für alle Gartenarbeiten</li>
  <li>Husqvarna Flaschenöffner</li>
  <li>Husqvarna R214C Frontmäher Rider mit 94 cm Mähdeck</li>
</ul>

<p class="mb-3">Effizienter Rider mit 94 cm langem Kombi-Mähwerk, mit Premium BioClip® und Rückwärtsauswurf. Geeignet für Haus- und Grundstücksbesitzer, die hohe Effizienz, einfache Bedienung, überragende Manövrierfähigkeit und ein wirklich angenehmes Fahrgefühl benötigen. Die Knicklenkung und das frontmontierte Mähdeck sorgen für eine intuitive Bedienung, eine hervorragende Zugänglichkeit zum Mähen und einen guten Überblick über Ihren Arbeitsbereich. Das hydrostatische Getriebe mit Pedalantrieb, die leicht zugänglichen Bedienelemente und die automatische Messereinschaltung machen das Mähen zum Vergnügen. Das Mähwerk hat eine Schnittbreite von 94 cm und lässt sich zur einfachen Reinigung nach dem Mähen leicht in die Serviceposition kippen. Dank Anbaugeräten wie Schneepflug, Anhänger, Moosrechen und Streuwagen kann dieser Rider Ihren Garten das ganze Jahr über pflegen.</p>

<h3 class="font-semibold mb-2 mt-5">Unterschied zwischen dem R213C & R214C?</h3>
<p class="mb-3">Husqvarna stellt seit 2020 Motoren her, die zuvor von Unternehmen wie B&S oder Kohler bezogen wurden. Durch die Eigenproduktion sind die Kosten niedriger und der R214C kann zu einem viel günstigeren Preis als der R213C angeboten werden. Ansonsten ist die Maschine genau die gleiche. Der R214C ist mit dem Husqvarna-Motor HS 413AE ausgestattet.</p>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang Bundle</h3>
<ul class="space-y-1 mb-3">
  <li>Husqvarna R214C Frontmäher Rider</li>
  <li>94 cm Kombi-Mähwerk mit BioClip® und Heckauswurf</li>
  <li>120iB Kabelloser Laubbläser</li>
  <li>Bli20 Akku</li>
  <li>QC80 Akku-Ladegerät</li>
  <li>Gartenanhänger</li>
  <li>Husqvarna Flaschenöffner</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider 214C Tracteur tondeuse avec plateau 94cm – Super Offre</h2>

<p class="mb-3"><strong>Super offre avec un R214C !</strong></p>

<p class="mb-3">Contenu de la livraison :</p>
<ul class="space-y-1 mb-3">
  <li>Souffleur sans fil 120iB</li>
  <li>Batterie Bli20</li>
  <li>Chargeur QC80</li>
  <li>Remorque de jardin</li>
  <li>Ouvre-bouteille Husqvarna</li>
  <li>Husqvarna R214C Rider frontal avec plateau 94 cm</li>
</ul>

<p class="mb-3">Rider efficace avec plateau combiné de 94 cm, BioClip® premium et éjection arrière. La direction articulée et le plateau monté à l'avant offrent une utilisation intuitive, un excellent accès à la tonte et une bonne visibilité. La transmission hydrostatique à pédale, les commandes accessibles et l'engagement automatique des lames rendent la tonte agréable. Le plateau bascule en position service pour un nettoyage facile.</p>

<h3 class="font-semibold mb-2 mt-5">Contenu du bundle</h3>
<ul class="space-y-1 mb-3">
  <li>Husqvarna R214C Rider frontal</li>
  <li>Plateau combiné 94 cm avec BioClip® et éjection arrière</li>
  <li>Souffleur sans fil 120iB</li>
  <li>Batterie Bli20</li>
  <li>Chargeur QC80</li>
  <li>Remorque de jardin</li>
  <li>Ouvre-bouteille Husqvarna</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider 214C Ride-on Mower incl. 94cm Cutting Deck – Super Deal</h2>

<p class="mb-3"><strong>Super deal with an R214C!</strong></p>

<p class="mb-3">Delivery includes:</p>
<ul class="space-y-1 mb-3">
  <li>120iB Cordless Leaf Blower</li>
  <li>Bli20 Battery</li>
  <li>QC80 Battery Charger</li>
  <li>Garden Trailer</li>
  <li>Husqvarna Bottle Opener</li>
  <li>Husqvarna R214C Front Rider with 94 cm cutting deck</li>
</ul>

<p class="mb-3">Efficient rider with 94 cm combo cutting deck, premium BioClip® and rear discharge. The articulated steering and front-mounted deck provide intuitive operation, excellent mowing access and good visibility. The hydrostatic pedal transmission, accessible controls and automatic blade engagement make mowing a pleasure. The deck tilts into service position for easy cleaning. With attachments like snow plough, trailer, moss rake and spreader, this rider can maintain your garden all year round.</p>

<h3 class="font-semibold mb-2 mt-5">Bundle contents</h3>
<ul class="space-y-1 mb-3">
  <li>Husqvarna R214C Front Rider</li>
  <li>94 cm Combi cutting deck with BioClip® and rear discharge</li>
  <li>120iB Cordless Leaf Blower</li>
  <li>Bli20 Battery</li>
  <li>QC80 Battery Charger</li>
  <li>Garden Trailer</li>
  <li>Husqvarna Bottle Opener</li>
</ul>`,
    price_eur: 2964.00,
    image_url: "/32-1.jpeg",
    gallery: ["/32-1.jpeg", "/32-2.jpg", "/32-3.jpeg", "/32-4.jpg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-06-13T10:00:00Z",
  },
  {
    id: "prod-33",
    slug: "husqvarna-rider-r-213c",
    category_id: "cat-2",
    name_de: "Husqvarna Rider R 213C",
    name_fr: "Husqvarna Rider R 213C",
    name_en: "Husqvarna Rider R 213C",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 213C</h2>

<p class="mb-3">Dieser effiziente Rider verfügt über ein erstklassiges BioClip und Heckauswurf System mit 94 cm Schnittbreite. Geeignet für Hausbesitzer die hohe Ansprüche an Effizienz, Benutzerfreundlichkeit, Wendigkeit und ein angenehmes Fahrverfahren stellen. Die Hinterachslenkung mit dynamischer Gewichtsübertragung und das frontmontierte Mähdeck ermöglichen eine einfache Bedienung, hervorragende Manövrierbarkeit und guten Überblick über Ihren Arbeitsbereich. Pedalgesteuertes Hydrostatikgetriebe, leicht zugängliche Bedienelemente und automatische Messerzuschaltung machen das Mähen zum Vergnügen. Das Mähdeck ist leicht in die Serviceposition zu bringen und vereinfacht daher die Reinigung nach dem Mähen. Dieser Rider kann soviel mehr als nur Ihren Rasen zu mähen. Dank Anbaugeräte wie Schneeräumschild, Anhänger und Streuwagen können Sie Ihren Garten das ganze Jahr über pflegen.</p>

<p class="mb-3"><strong>Preis ohne Mähdeck</strong></p>

<h3 class="font-semibold mb-2 mt-5">Motor & Ausstattung</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motorhersteller</strong> – Briggs & Stratton</li>
  <li><strong>Motor</strong> – INTEK Motor 3125</li>
  <li><strong>Nettoleistung</strong> – 6,7 kW @ 3000 U/min</li>
  <li><strong>Hubraum</strong> – 344 ccm</li>
  <li><strong>Zylinder</strong> – 1</li>
  <li><strong>Motorkühlung</strong> – Luft</li>
  <li><strong>Generator</strong> – 3 A</li>
  <li><strong>Batterie</strong> – 12 V 24 Ah</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Tankvolumen</strong> – 12 l</li>
  <li><strong>Motorschmierung</strong> – Drucköl</li>
  <li><strong>Öltyp</strong> – SAE10W30</li>
  <li><strong>Ölmenge</strong> – 1,5 l</li>
  <li><strong>Ölfilter</strong> – Ja</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Antriebssystem</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Getriebe</strong> – Hydrostatisch (Tuff Torq K46)</li>
  <li><strong>Antrieb</strong> – Pedalgesteuert</li>
  <li><strong>Geschwindigkeit</strong> – 0–9 km/h</li>
  <li><strong>Rückwärtsgeschwindigkeit</strong> – 0–9 km/h</li>
  <li><strong>Max. Neigung</strong> – 10°</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Mähdeck</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Ungepflegte innere Kreisfläche</strong> – 30 cm</li>
  <li><strong>Schnittbreite</strong> – 94 cm</li>
  <li><strong>Mähwerkstyp</strong> – Combi</li>
  <li><strong>Material</strong> – Stahl</li>
  <li><strong>Mähmethoden</strong> – BioClip / Heckauswurf</li>
  <li><strong>Schnitthöhe</strong> – 25–75 mm, 10 Stufen</li>
  <li><strong>Messerzuschaltung</strong> – Automatisch</li>
  <li><strong>Messer</strong> – 3</li>
  <li><strong>Pulverbeschichtetes Mähdeck</strong> – Ja</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Sonstiges</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Sitz Material</strong> – Vinyl</li>
  <li><strong>Sitz Rückenlehnenhöhe</strong> – Mittel</li>
  <li><strong>Klappbarer Sitz</strong> – Ja</li>
  <li><strong>Reifengröße vorne</strong> – 170/60-8</li>
  <li><strong>Reifengröße hinten</strong> – 170/60-8</li>
  <li><strong>Radstand</strong> – 88,7 cm</li>
  <li><strong>Bodenfreiheit</strong> – 105 mm</li>
  <li><strong>Länge</strong> – 223 cm</li>
  <li><strong>Breite</strong> – 100 cm</li>
  <li><strong>Höhe</strong> – 107 cm</li>
  <li><strong>Gewicht</strong> – 231 kg</li>
  <li><strong>Anhängelast gebremst</strong> – 110 kg</li>
  <li><strong>Schalldruckpegel am Ohr</strong> – 84 dB(A)</li>
  <li><strong>Garantierter Schallleistungspegel (LWA)</strong> – 100 dB(A)</li>
  <li><strong>Vibration Lenkrad</strong> – 2,5 m/s²</li>
  <li><strong>Vibration Sitz</strong> – 0,7 m/s²</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 213C</h2>

<p class="mb-3">Ce Rider efficace dispose du système BioClip premium et d'éjection arrière avec une largeur de coupe de 94 cm. Idéal pour les propriétaires exigeant efficacité, facilité d'utilisation, maniabilité et confort de conduite. La direction sur roues arrière avec transfert de poids dynamique et le plateau monté à l'avant offrent une utilisation facile, une excellente maniabilité et une bonne visibilité.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Briggs & Stratton INTEK 3125, 344 cm³, 6,7 kW</li>
  <li><strong>Réservoir</strong> – 12 litres</li>
  <li><strong>Transmission</strong> – Hydrostatique Tuff Torq K46</li>
  <li><strong>Vitesse</strong> – 0–9 km/h</li>
  <li><strong>Largeur de coupe</strong> – 94 cm</li>
  <li><strong>Hauteur de coupe</strong> – 25–75 mm, 10 positions</li>
  <li><strong>Méthodes</strong> – BioClip / Éjection arrière</li>
  <li><strong>Lames</strong> – 3</li>
  <li><strong>Pneus</strong> – 170/60-8</li>
  <li><strong>Poids</strong> – 231 kg</li>
</ul>`,

    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 213C</h2>

<p class="mb-3">This efficient rider features a premium BioClip and rear discharge system with 94 cm cutting width. Suitable for homeowners demanding high efficiency, ease of use, manoeuvrability and a pleasant ride. The rear-wheel steering with dynamic weight transfer and front-mounted cutting deck provide easy operation, excellent manoeuvrability and good visibility.</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Briggs & Stratton INTEK 3125, 344 cc, 6.7 kW</li>
  <li><strong>Fuel tank</strong> – 12 litres</li>
  <li><strong>Transmission</strong> – Tuff Torq K46 hydrostatic</li>
  <li><strong>Speed</strong> – 0–9 km/h</li>
  <li><strong>Cutting width</strong> – 94 cm</li>
  <li><strong>Cutting height</strong> – 25–75 mm, 10 positions</li>
  <li><strong>Methods</strong> – BioClip / Rear discharge</li>
  <li><strong>Blades</strong> – 3</li>
  <li><strong>Tyres</strong> – 170/60-8</li>
  <li><strong>Weight</strong> – 231 kg</li>
</ul>`,
    price_eur: 4298.00,
    image_url: "/33-1.webp",
    gallery: ["/33-1.webp", "/33-2.webp", "/33-3.webp", "/33-4.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-14T10:00:00Z",
  },
  {
    id: "prod-34",
    slug: "husqvarna-rider-r-214c",
    category_id: "cat-2",
    name_de: "Husqvarna Rider R 214C",
    name_fr: "Husqvarna Rider R 214C",
    name_en: "Husqvarna Rider R 214C",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 214C</h2>

<p class="mb-3">Der effiziente Rider mit 94 cm Combi-Mähdeck bietet eine erstklassige BioClip (Mulchen) – und Heckauswurf-Funktion. Geeignet für Haus- und Grundbesitzer, die hohe Effizienz, eine einfache Bedienung, überragende Manövrierfähigkeit und ein wirklich angenehmes Fahrgefühl wünschen. Die Knicklenkung und das frontmontierte Mähdeck sorgen für eine intuitive Bedienung und einen guten Überblick über Ihren Arbeitsbereich. Das pedalgesteuerte Hydrostatik-Getriebe, die leicht zugänglichen Bedienelemente und die automatische Messerzuschaltung machen das Mähen zum Vergnügen. Das Mähdeck lässt sich zur einfachen Reinigung nach dem Mähen leicht in die Serviceposition hochklappen. Dieser Rider kann so viel mehr als nur Ihren Rasen mähen. Dank Anbaugeräten wie Schneeschild, Anhänger, Moosrechen und Streuwagen können Sie Ihr Grundstück das ganze Jahr über pflegen.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Antrieb</strong> – Pedalgesteuert</li>
  <li><strong>Kraftstoffart</strong> – Benzin</li>
  <li><strong>Max. Schnitthöhe</strong> – 75 mm</li>
  <li><strong>Batterie inklusive</strong> – Ja</li>
  <li><strong>Leistung</strong> – 8,4 kW</li>
  <li><strong>Tank-Kapazität</strong> – keine Angabe</li>
  <li><strong>Länge</strong> – 192,2 cm</li>
  <li><strong>Motorgröße</strong> – 413 cm³</li>
  <li><strong>Herstellergarantie</strong> – 2 Jahre</li>
  <li><strong>Schallpegel</strong> – 84 dB</li>
  <li><strong>Schnittbreite</strong> – 94 cm</li>
  <li><strong>Artikelstandort</strong> – Herleshausen, Deutschland</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 214C</h2>

<p class="mb-3">Le Rider efficace avec plateau combiné de 94 cm offre une fonction BioClip (mulching) et d'éjection arrière de premier ordre. La direction articulée et le plateau monté à l'avant assurent une utilisation intuitive et une bonne visibilité. La transmission hydrostatique à pédale et l'engagement automatique des lames rendent la tonte agréable.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Transmission</strong> – Pédale</li>
  <li><strong>Carburant</strong> – Essence</li>
  <li><strong>Puissance</strong> – 8,4 kW</li>
  <li><strong>Moteur</strong> – 413 cm³</li>
  <li><strong>Largeur de coupe</strong> – 94 cm</li>
  <li><strong>Garantie</strong> – 2 ans</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 214C</h2>

<p class="mb-3">The efficient rider with 94 cm Combi cutting deck offers premium BioClip (mulching) and rear discharge functions. The articulated steering and front-mounted deck provide intuitive operation and good visibility. The pedal-controlled hydrostatic transmission and automatic blade engagement make mowing a pleasure.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Drive</strong> – Pedal controlled</li>
  <li><strong>Fuel</strong> – Petrol</li>
  <li><strong>Power</strong> – 8.4 kW</li>
  <li><strong>Engine</strong> – 413 cm³</li>
  <li><strong>Cutting width</strong> – 94 cm</li>
  <li><strong>Warranty</strong> – 2 years</li>
</ul>`,
    price_eur: 2694.00,
    image_url: "/34-1.webp",
    gallery: ["/34-1.webp", "/34-2.webp", "/34-3.webp", "/34-4.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-15T10:00:00Z",
  },
  {
    id: "prod-35",
    slug: "husqvarna-rider-r-214tc-comfort-edition",
    category_id: "cat-2",
    name_de: "Husqvarna Rider R 214TC Comfort Edition",
    name_fr: "Husqvarna Rider R 214TC Comfort Edition",
    name_en: "Husqvarna Rider R 214TC Comfort Edition",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 214TC Comfort Edition</h2>

<p class="mb-3">Der Husqvarna Rider 214TC – Comfort Edition ist effizient, vielseitig und einfach zu bedienen und bewältigt mühelos größere Rasenflächen. Ausgestattet mit einem Softgrip-Lenkrad und einem hohen, bequemen Sitz. Verfügt über einen Zweizylindermotor und ein 94-cm-Kombimähwerk, das zwei Schnittoptionen bietet – BioClip (Mulchen) für die Rasendüngung und Heckauswurf für höheres, kräftigeres Gras. Ein langlebiger Mäher mit hervorragender Manövrierfähigkeit, leicht zu reinigen und zu warten dank der Wartungsposition des Mähdecks.</p>

<h3 class="font-semibold mb-2 mt-5">Merkmale</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Knicklenkung</strong> – Die beiden Hinterräder können komplett unter den Hinterwagen schwenken für einzigartige Manövrierfähigkeit und minimalen Wendekreis</li>
  <li><strong>Turn Key Start</strong> – Einfach zu starten bei jedem Wetter, kein Choke nötig</li>
  <li><strong>Husqvarna Motor</strong> – Leistungsstarker Zweizylinder-Motor</li>
  <li><strong>Lenkrad mit Softgrip</strong> – Angenehme Haptik für komfortables Lenken</li>
  <li><strong>Komfortsitz mit hoher Rückenlehne</strong> – Bequeme Sitzposition während der Arbeit</li>
  <li><strong>Schwarze Felgen</strong> – Einzigartiger Look</li>
  <li><strong>Serviceposition</strong> – Mähdeck leicht in Wartungsposition bringbar für Reinigung, Messerwechsel und Service</li>
  <li><strong>Vielseitige Einsatzmöglichkeiten</strong> – Umfangreiches Zubehör für ganzjährigen Einsatz</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Kraftstoffsorte</strong> – Benzin</li>
  <li><strong>Akku-Kapazität</strong> – 24 Ah</li>
  <li><strong>Akku-Typ</strong> – Blei/Säure</li>
  <li><strong>Schnittbreite</strong> – 94 cm</li>
  <li><strong>Schnitthöhe</strong> – 25–75 mm</li>
  <li><strong>Messerzuschaltung</strong> – Automatisch</li>
  <li><strong>Radstand</strong> – 88,7 cm</li>
  <li><strong>Bodenfreiheit</strong> – 105 mm</li>
  <li><strong>Länge</strong> – 223 cm</li>
  <li><strong>Breite</strong> – 100 cm</li>
  <li><strong>Höhe</strong> – 107 cm</li>
  <li><strong>Max. Zuglast</strong> – 110 kg</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 214TC Comfort Edition</h2>

<p class="mb-3">Le Rider Husqvarna 214TC – Comfort Edition est efficace, polyvalent et facile à utiliser. Équipé d'un volant Softgrip et d'un siège haut confort. Moteur bicylindre et plateau combiné de 94 cm offrant deux options de coupe – BioClip (mulching) et éjection arrière.</p>

<h3 class="font-semibold mb-2 mt-5">Caractéristiques</h3>
<ul class="space-y-1 mb-3">
  <li>Direction articulée pour une maniabilité unique</li>
  <li>Démarrage sans starter</li>
  <li>Moteur bicylindre Husqvarna</li>
  <li>Volant Softgrip</li>
  <li>Siège confort à dossier haut</li>
  <li>Position service du plateau</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Carburant</strong> – Essence</li>
  <li><strong>Largeur de coupe</strong> – 94 cm</li>
  <li><strong>Hauteur de coupe</strong> – 25–75 mm</li>
  <li><strong>Dimensions (L×l×H)</strong> – 223 × 100 × 107 cm</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 214TC Comfort Edition</h2>

<p class="mb-3">The Husqvarna Rider 214TC – Comfort Edition is efficient, versatile and easy to use, handling larger lawns effortlessly. Features a Softgrip steering wheel, high comfortable seat, twin-cylinder engine and 94 cm Combi cutting deck with BioClip (mulching) and rear discharge options.</p>

<h3 class="font-semibold mb-2 mt-5">Features</h3>
<ul class="space-y-1 mb-3">
  <li>Articulated steering for unique manoeuvrability</li>
  <li>Turn Key Start – no choke needed</li>
  <li>Husqvarna twin-cylinder engine</li>
  <li>Softgrip steering wheel</li>
  <li>High-back comfort seat</li>
  <li>Service position for easy cleaning and maintenance</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Fuel</strong> – Petrol</li>
  <li><strong>Cutting width</strong> – 94 cm</li>
  <li><strong>Cutting height</strong> – 25–75 mm</li>
  <li><strong>Dimensions (L×W×H)</strong> – 223 × 100 × 107 cm</li>
</ul>`,
    price_eur: 3025.00,
    image_url: "/35-1.webp",
    gallery: ["/35-1.webp", "/35-2.webp", "/35-3.webp", "/35-4.webp"],
    is_hot: true,
    stock: 99,
    created_at: "2026-06-16T10:00:00Z",
  },
  {
    id: "prod-36",
    slug: "husqvarna-rider-r-214tc-comfort-edition-sondermodell-2023",
    category_id: "cat-2",
    name_de: "HUSQVARNA RIDER R 214TC COMFORT EDITION Sondermodell 2023",
    name_fr: "HUSQVARNA RIDER R 214TC COMFORT EDITION Édition spéciale 2023",
    name_en: "HUSQVARNA RIDER R 214TC COMFORT EDITION Special Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA RIDER R 214TC COMFORT EDITION – Sondermodell 2023</h2>

<p class="mb-3">Der kraftvolle Husqvarna Rider R 214TC Comfort Edition mit Zweizylinder-Motor verfügt über BioClip® und Heckauswurf-System mit 94 cm Schnittbreite. Die Knicklenkung mit dynamischer Gewichtsübertragung und das frontmontierte Mähdeck ermöglichen eine einfache Bedienung und hervorragende Manövrierbarkeit. Dieses Modell verfügt über die Low Sound Technology, welche verbesserte Klangqualität und erhöhte Motorleistung bietet. Pedalgesteuertes Hydrostatikgetriebe, leicht zugängliche Bedienelemente und automatische Messerzuschaltung machen das Mähen zum Vergnügen. Das Mähdeck ist leicht in die Serviceposition zu bringen. Dank vieler Anbaugeräte können Sie Ihr Grundstück das ganze Jahr über pflegen.</p>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motor</strong> – Husqvarna HV 586AE</li>
  <li><strong>Hubraum</strong> – 586 ccm</li>
  <li><strong>Zylinder</strong> – 2</li>
  <li><strong>Leistung</strong> – 11,3 kW / 15,3 PS</li>
  <li><strong>Akku-Kapazität</strong> – 24 Ah</li>
  <li><strong>Akku-Leistung</strong> – 12 V</li>
  <li><strong>Höhe</strong> – 107 cm</li>
  <li><strong>Länge</strong> – 223 cm</li>
  <li><strong>Breite</strong> – 100 cm</li>
  <li><strong>Schnitthöhe</strong> – 25–75 mm</li>
  <li><strong>Bodenfreiheit</strong> – 105 mm</li>
  <li><strong>Gewicht</strong> – 253 kg</li>
  <li><strong>Schnitthöhenstufen</strong> – 10</li>
  <li><strong>Schnittbreite</strong> – 94 cm</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Motorkühlung</strong> – Luft</li>
  <li><strong>Motorschmierung</strong> – Druckschmierung</li>
  <li><strong>Messerzuschaltung</strong> – Automatisch per Handhebel</li>
  <li><strong>Messer</strong> – 3</li>
  <li><strong>Mähwerkstyp</strong> – Combi 94 cm</li>
  <li><strong>Antrieb</strong> – Hydrostatisch mittels Fußpedal</li>
  <li><strong>Klappbarer Sitz</strong> – Ja</li>
  <li><strong>Pulverbeschichtetes Mähdeck</strong> – Ja</li>
  <li><strong>Tankvolumen</strong> – 12 l</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA RIDER R 214TC COMFORT EDITION – Édition spéciale 2023</h2>

<p class="mb-3">Le Rider Husqvarna R 214TC Comfort Edition avec moteur bicylindre dispose du système BioClip® et d'éjection arrière avec 94 cm de largeur de coupe. La direction articulée et le plateau monté à l'avant offrent une utilisation facile et une excellente maniabilité. Ce modèle est équipé de la technologie Low Sound pour une qualité sonore améliorée.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Husqvarna HV 586AE, 586 cm³, 11,3 kW</li>
  <li><strong>Largeur de coupe</strong> – 94 cm</li>
  <li><strong>Poids</strong> – 253 kg</li>
  <li><strong>Réservoir</strong> – 12 litres</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA RIDER R 214TC COMFORT EDITION – Special Model 2023</h2>

<p class="mb-3">The powerful Husqvarna Rider R 214TC Comfort Edition with twin-cylinder engine features BioClip® and rear discharge system with 94 cm cutting width. The articulated steering and front-mounted deck provide easy operation and excellent manoeuvrability. This model features Low Sound Technology for improved sound quality and increased engine performance.</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Husqvarna HV 586AE, 586 cc, 11.3 kW</li>
  <li><strong>Cutting width</strong> – 94 cm</li>
  <li><strong>Weight</strong> – 253 kg</li>
  <li><strong>Fuel tank</strong> – 12 litres</li>
</ul>`,
    price_eur: 2960.00,
    image_url: "/36-1.png",
    gallery: ["/36-1.png", "/36-2.png", "/36-3.webp", "/36-4.jpg"],
    is_hot: true,
    stock: 97,
    created_at: "2026-06-17T10:00:00Z",
  },
  {
    id: "prod-37",
    slug: "husqvarna-rider-r-216t-awd",
    category_id: "cat-2",
    name_de: "Husqvarna Rider R 216T AWD",
    name_fr: "Husqvarna Rider R 216T AWD",
    name_en: "Husqvarna Rider R 216T AWD",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 216T AWD – ohne Mähwerk</h2>

<p class="mb-3">Dieser Rider mit Allradantrieb und drehmomentstarkem V-Twin-Motor verbindet einfache Bedienung und exzellentes Handling mit Kraft und Leistung. Die Knicklenkung bietet Manövrierfähigkeit für die wirklich engen Kurven. Ausgestattet mit LED-Leuchten und Turn Key Start.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Antriebsart</strong> – AWD</li>
  <li><strong>Leistung</strong> – 11,3 kW</li>
  <li><strong>Tank-Kapazität</strong> – 12 L</li>
  <li><strong>Motorgröße</strong> – 586 cm³</li>
  <li><strong>Schallpegel</strong> – 85,9 dB(A)</li>
  <li><strong>Länge</strong> – 194 cm</li>
  <li><strong>Antrieb</strong> – Pedalgesteuert</li>
  <li><strong>Kraftstoffart</strong> – Benzin</li>
  <li><strong>Max. Schnitthöhe</strong> – 75 mm</li>
  <li><strong>Reifengröße</strong> – 170 / 60 – 8</li>
  <li><strong>Batterie inklusive</strong> – Ja</li>
  <li><strong>Artikelstandort</strong> – Herleshausen, Deutschland</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 216T AWD – sans plateau</h2>

<p class="mb-3">Ce Rider à transmission intégrale avec moteur V-Twin coupleux allie simplicité d'utilisation et excellent handling avec puissance et performance. La direction articulée offre une maniabilité dans les virages les plus serrés. Équipé de phares LED et du démarrage Turn Key.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Transmission</strong> – AWD</li>
  <li><strong>Puissance</strong> – 11,3 kW</li>
  <li><strong>Réservoir</strong> – 12 L</li>
  <li><strong>Moteur</strong> – 586 cm³</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Rider R 216T AWD – without cutting deck</h2>

<p class="mb-3">This all-wheel drive rider with torque-rich V-Twin engine combines easy operation and excellent handling with power and performance. The articulated steering offers manoeuvrability for the tightest turns. Equipped with LED lights and Turn Key Start.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Drive</strong> – AWD</li>
  <li><strong>Power</strong> – 11.3 kW</li>
  <li><strong>Fuel tank</strong> – 12 L</li>
  <li><strong>Engine</strong> – 586 cm³</li>
</ul>`,
    price_eur: 3867.00,
    image_url: "/37-1.webp",
    gallery: ["/37-1.webp", "/37-2.webp", "/37-3.webp", "/37-4.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-18T10:00:00Z",
  },
  {
    id: "prod-38",
    slug: "husqvarna-tc-242-t-mit-schneeschild-120plus-gartenanhanger-275",
    category_id: "cat-2",
    name_de: "HUSQVARNA TC 242 T mit Schneeschild 120Plus & Gartentraktoren Anhänger 275",
    name_fr: "HUSQVARNA TC 242 T avec lame à neige 120Plus & Remorque 275",
    name_en: "HUSQVARNA TC 242 T with Snow Blade 120Plus & Garden Trailer 275",
    description_de: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA TC 242 T – Modell 2023 mit Schneeschild 120Plus & HUSQVARNA Gartentraktoren Anhänger 275</h2>

<p class="mb-3">Der neue Husqvarna Rasentraktor TC 242T ist ideal für Hausbesitzer und Grundbesitzer mit größeren Gärten. Der geräumige, integrierte Sammelbehälter lässt sich bequem vom Fahrersitz leeren. Ausgestattet mit einem kraftvollen Zweizylinder-Briggs&Stratton Motor mit 656 ccm, integriertem 320 L Heckfangsystem, pedalbetriebenem hydrostatischem Getriebe und Low-Vibe-Deck-Antrieb.</p>

<p class="mb-3"><strong>Winterpaket:</strong> Schneeschild 120 cm Plus mit Verstellhebel, Gummileiste</p>

<h3 class="font-semibold mb-2 mt-5">Produkteigenschaften</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Start ohne Choke</strong> – Auto Choke</li>
  <li><strong>Pedalgesteuertes Hydrostatikgetriebe</strong> – Separate Pedale für Vorwärts/Rückwärts</li>
  <li><strong>Robuste Sammelschnittstelle</strong> – Stahlrückplatte und Verriegelungsmechanismus</li>
  <li><strong>Gusseiserne Vorderachse</strong> – Balance und Stabilität, auch mit Grasfangbox</li>
  <li><strong>Verstärktes Mähdeck</strong> – Pulverbeschichtet für Festigkeit und Korrosionswiderstand</li>
  <li><strong>Hoher Komfort Rücksitz</strong> – Kann mit Armlehnen ergänzt werden</li>
  <li><strong>Betriebsstundenzähler</strong> – Service- und Wartungsintervalle im Blick</li>
  <li><strong>Robustes Stahlchassis</strong> – Erhöhte Haltbarkeit und Stabilität</li>
  <li><strong>Am Kotflügel montierte Schnitthöhenverstellung</strong> – Federgestütztes Mähdeck</li>
  <li><strong>Air Induction</strong> – Starker Luftstrom für hervorragende Mähergebnisse</li>
  <li><strong>Offener Durchstieg</strong> – Bequemer Ein- und Ausstieg</li>
  <li><strong>Leicht verstellbarer Sitz</strong> – Nach vorne/hinten und aufwärts/abwärts</li>
  <li><strong>Reinigungsanschluss am Mähwerk</strong> – Gartenschlauch anschließen</li>
  <li><strong>Stützräder</strong> – Minimieren Rasenbeschädigung auf unebenem Gelände</li>
  <li><strong>Grasfangbox 320 l</strong> – Vom Fahrersitz leicht zu entleeren</li>
  <li><strong>Doppeltes Lenkseil</strong> – Kleinerer Wendekreis</li>
  <li><strong>Pulverbeschichtetes Mähdeck</strong> – Rostbeständigkeit</li>
  <li><strong>Füllstandsanzeige</strong> – Zeigt an wann entleert werden muss</li>
  <li><strong>Scheinwerfer</strong> – Arbeiten während der Dunkelheit</li>
  <li><strong>Rückwärtsfahrsystem (ROS)</strong> – Deaktiviert Schneidmesser beim Rückwärtsfahren</li>
  <li><strong>Sicherheitsschalter unter dem Sitz</strong> – Automatische Abschaltung</li>
  <li><strong>Ganzjahreseinsatz</strong> – Anhänger, Schneeräumschilder, Kehrbürsten</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motorhersteller</strong> – Briggs & Stratton</li>
  <li><strong>Motor</strong> – Endurance Series V-Twin</li>
  <li><strong>Hubraum</strong> – 656 ccm</li>
  <li><strong>Nettoleistung</strong> – 10,1 kW bei 2.600 U/min</li>
  <li><strong>Zylinder</strong> – 2</li>
  <li><strong>Tankvolumen</strong> – 9,5 Liter</li>
  <li><strong>Ölfilter</strong> – Ja</li>
  <li><strong>Schnittbreite</strong> – 108 cm</li>
  <li><strong>Schnitthöhe</strong> – 38–102 mm</li>
  <li><strong>Stützräder</strong> – 2</li>
  <li><strong>Getriebeart</strong> – Hydrostatisch</li>
  <li><strong>Getriebehersteller</strong> – Tuff Torq</li>
  <li><strong>Antrieb</strong> – Pedalgesteuert</li>
  <li><strong>Vorwärtsgeschwindigkeit</strong> – 0 – 6,7 km/h</li>
  <li><strong>Rückwärtsgeschwindigkeit</strong> – 0 – 1,6 km/h</li>
  <li><strong>Grasfangbox</strong> – 320 l</li>
  <li><strong>Schalldruckpegel</strong> – 98 dB(A)</li>
  <li><strong>Schallleistungspegel LWA</strong> – 100 dB(A)</li>
  <li><strong>Vibration Lenkrad</strong> – 3,87 m/s²</li>
  <li><strong>Vibration Sitz</strong> – 0,13 m/s²</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">HUSQVARNA Gartentraktoren Anhänger 275</h3>
<p class="mb-3">Robuster Anhänger mit Heckklappe für einfaches Be- und Entladen.</p>

<ul class="space-y-1 mb-3">
  <li><strong>Höhe</strong> – 74 cm</li>
  <li><strong>Länge</strong> – 178 cm</li>
  <li><strong>Breite</strong> – 84 cm</li>
  <li><strong>Traglast</strong> – 225 kg</li>
  <li><strong>Reifengröße</strong> – 406 mm</li>
  <li><strong>Passend für</strong> – Rider R 213C, R 216T AWD, R 318, R 320 AWD, RC 318T, RC 320Ts AWD, R 422Ts AWD, R 418Ts AWD, R 316T, R 316TXs AWD, R 316T AWD sowie Gartentraktoren TS 138, TS 142L, TS 243T, TS 346, TS 38, TS 142, TC 138, TC 130, TS 238, TS 343, TC 38, TC 342T, TC 139T, TC 239T, TC 142T</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA TC 242 T – Modèle 2023 avec lame à neige 120Plus & Remorque 275</h2>

<p class="mb-3">Le nouveau tracteur tondeuse Husqvarna TC 242T est idéal pour les propriétaires de grands jardins. Équipé d'un moteur bicylindre Briggs&Stratton de 656 cm³, système de ramassage arrière de 320 L, transmission hydrostatique à pédale et entraînement Low-Vibe.</p>

<p class="mb-3"><strong>Pack Hiver :</strong> Lame à neige 120 cm Plus avec levier de réglage, bande caoutchouc</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Briggs & Stratton Endurance Series V-Twin, 656 cm³, 10,1 kW</li>
  <li><strong>Réservoir</strong> – 9,5 litres</li>
  <li><strong>Largeur de coupe</strong> – 108 cm</li>
  <li><strong>Bac</strong> – 320 litres</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA TC 242 T – Model 2023 with Snow Blade 120Plus & Garden Trailer 275</h2>

<p class="mb-3">The new Husqvarna TC 242T lawn tractor is ideal for homeowners with larger gardens. Equipped with a powerful Briggs&Stratton V-Twin engine (656 cc), integrated 320 L rear collection system, pedal-operated hydrostatic transmission and Low-Vibe deck drive.</p>

<p class="mb-3"><strong>Winter Package:</strong> Snow blade 120 cm Plus with adjustment lever, rubber strip</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Briggs & Stratton Endurance Series V-Twin, 656 cc, 10.1 kW</li>
  <li><strong>Fuel tank</strong> – 9.5 litres</li>
  <li><strong>Cutting width</strong> – 108 cm</li>
  <li><strong>Collector</strong> – 320 litres</li>
</ul>`,
    price_eur: 3219.00,
    image_url: "/38-1.jpg",
    gallery: ["/38-1.jpg", "/38-2.png", "/38-3.jpg", "/38-4.png"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-19T10:00:00Z",
  },
  {
    id: "prod-39",
    slug: "husqvarna-tc138l-rasentraktor-angebot-modell-2023",
    category_id: "cat-2",
    name_de: "HUSQVARNA TC138L RASENTRAKTOR ANGEBOT Modell 2023",
    name_fr: "HUSQVARNA TC138L TRACTEUR TONDEUSE OFFRE Modèle 2023",
    name_en: "HUSQVARNA TC138L LAWN TRACTOR DEAL Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA TC138L RASENTRAKTOR ANGEBOT – Modell 2023</h2>

<p class="mb-3">Husqvarna TC138L Traktor mit Fangvorrichtung 97 cm – Action mit Trailer + FM Radio Gehörschutz + Husqvarna Flaschenöffner Kettensäge.</p>

<p class="mb-3">Der TC 138 ist ein benutzerfreundlicher Traktor, der sich ideal für Hausbesitzer mit kleinen bis mittelgroßen Gärten eignet. Der Traktor fängt Grasschnitt und Laub hervorragend auf und liefert ein sauberes Schnittergebnis. Der geräumige, integrierte Auffangbehälter lässt sich bequem vom Fahrersitz aus entleeren. Ausgestattet mit einem leistungsstarken Husqvarna Serienmotor mit chokefreiem Start und pedalbetriebenem hydrostatischem Getriebe. Der Sitz ist im Sitzen verstellbar (nach vorne/unten oder nach hinten/oben).</p>

<h3 class="font-semibold mb-2 mt-5">Im Bundle enthalten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Husqvarna TC138L Rasentraktor</strong> – 97 cm Schnittbreite, Hydrostat, 220 l Fangkorb</li>
  <li><strong>Husqvarna Anhänger Schwarz</strong> – Kippbarer Anhänger mit abnehmbarer Heckklappe, geeignet für alle Husqvarna Rider und Gartentraktoren</li>
  <li><strong>Husqvarna Radio FM Gehörschutz</strong> – Kapselgehörschützer mit FM-Radio, verbesserte Dämpfung und Klangqualität, Audio-Eingang 3,5 mm (AUX)</li>
  <li><strong>Husqvarna Flaschenöffner Kettensäge</strong> – Sammlerstück und nützliches „Werkzeug", auch als Schlüsselanhänger verwendbar</li>
</ul>

<p class="mb-3 mt-4"><strong>Achtung!</strong> Der Anhänger und die Fangbox müssen im Hinblick auf den Transport selbst zusammengebaut werden (ca. 2 Stunden Arbeit).</p>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA TC138L TRACTEUR TONDEUSE OFFRE – Modèle 2023</h2>

<p class="mb-3">Tracteur Husqvarna TC138L avec dispositif de ramassage 97 cm – Action avec remorque + casque radio FM + ouvre-bouteille Husqvarna.</p>

<p class="mb-3">Le TC 138 est un tracteur convivial idéal pour les propriétaires de petits et moyens jardins. Le bac intégré spacieux se vide depuis le siège conducteur. Équipé d'un moteur Husqvarna série avec démarrage sans starter et transmission hydrostatique à pédale.</p>

<h3 class="font-semibold mb-2 mt-5">Contenu du bundle</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Husqvarna TC138L</strong> – 97 cm, hydrostatique, bac 220 L</li>
  <li><strong>Remorque Husqvarna noire</strong> – Basculante avec hayon amovible</li>
  <li><strong>Casque radio FM Husqvarna</strong> – Protection auditive avec radio FM, entrée AUX 3,5 mm</li>
  <li><strong>Ouvre-bouteille Husqvarna</strong> – Porte-clés collection</li>
</ul>

<p class="mb-3"><strong>Attention !</strong> La remorque et le bac nécessitent un montage (env. 2 heures).</p>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">HUSQVARNA TC138L LAWN TRACTOR DEAL – Model 2023</h2>

<p class="mb-3">Husqvarna TC138L tractor with 97 cm collection system – Action with trailer + FM radio hearing protector + Husqvarna bottle opener.</p>

<p class="mb-3">The TC 138 is a user-friendly tractor ideal for homeowners with small to medium-sized gardens. The spacious integrated collector can be emptied from the driver's seat. Equipped with a powerful Husqvarna series engine with no-choke start and pedal-operated hydrostatic transmission.</p>

<h3 class="font-semibold mb-2 mt-5">Bundle includes</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Husqvarna TC138L</strong> – 97 cm cutting width, hydrostatic, 220 L collector</li>
  <li><strong>Husqvarna black trailer</strong> – Tipping with removable tailgate</li>
  <li><strong>Husqvarna FM radio ear muffs</strong> – Hearing protection with FM radio, AUX input</li>
  <li><strong>Husqvarna chainsaw bottle opener</strong> – Collectible keychain</li>
</ul>

<p class="mb-3"><strong>Note!</strong> Trailer and collector box require self-assembly (approx. 2 hours).</p>`,
    price_eur: 1997.00,
    image_url: "/39-1.jpeg",
    gallery: ["/39-1.jpeg", "/39-2.jpg", "/39-3.jpg", "/39-4.jpg", "/39-5.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-20T10:00:00Z",
  },
  {
    id: "prod-40",
    slug: "husqvarna-zero-turn-profi-maher-z454x-inkl-mahdeck-modell-2023",
    category_id: "cat-2",
    name_de: "Husqvarna Zero Turn Profi-Mäher Z454X – inkl. Mähdeck – Modell 2023",
    name_fr: "Husqvarna Tondeuse Zero Turn professionnelle Z454X – incl. plateau – Modèle 2023",
    name_en: "Husqvarna Zero Turn Professional Mower Z454X – incl. cutting deck – Model 2023",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Zero Turn Profi-Mäher Z454X – inkl. Mähdeck – Modell 2023</h2>

<p class="mb-3">Dieses Produkt wird vor Auslieferung einer kostenlosen Übergabeinspektion gemäß Husqvarna „Pre-Delivery-Inspection"-Richtlinien unterzogen. Das Produkt wird montiert, betriebsbereit und inklusive des Husqvarna Protokolls zur Übergabeinspektion an Ihre Adresse geliefert.</p>

<p class="mb-3">Der Husqvarna Z454X ist ein professioneller Nullwendekreismäher, der für professionelle Landschaftsgärtner und Bodenpfleger oder Grundstückseigentümer mit größeren Rasenflächen entwickelt wurde. Er bietet dauerhafte Leistung mit schnellem und effizientem Mähen. Ausgestattet mit einem leichtgängigen integrierten Getriebe, einem leistungsstarken Kawasaki-Motor, einer integrierten Feststellbremse und einem gefederten Sitz. Seitenauswurf mit Mulchoption.</p>

<h3 class="font-semibold mb-2 mt-5">Vorteile</h3>
<ul class="space-y-1 mb-3">
  <li>Besonders laufruhiger, vibrationsarmer und langlebiger Motor durch 2-Zylinder-Technik</li>
  <li>Bequemes Anlassen des Motors per Zündschlüssel</li>
  <li>Einfaches Reinigen des Mähwerks über die Mähwerk-Waschdüse</li>
  <li>Mulchkit optional erhältlich – Schnittgut als natürlicher Dünger</li>
  <li>Zuverlässiger und langlebiger Kawasaki-Motor</li>
  <li>Betriebsstundenzähler mit Servicealarm</li>
  <li>Patentiertes Feststellbremssystem – aktiviert/deaktiviert automatisch beim Bewegen der Lenkhebel</li>
  <li>Parker Getriebe – hohe Kraftübertragung mit geringer Geräuschentwicklung</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Geräteleistung</strong> – 16,1 kW / 21,9 PS</li>
  <li><strong>Marke Motor</strong> – Kawasaki</li>
  <li><strong>Motorbezeichnung</strong> – FR Series V-Twin</li>
  <li><strong>Anzahl Zylinder</strong> – 2</li>
  <li><strong>Hubraum</strong> – 726 cm³</li>
  <li><strong>Kraftstoff</strong> – Benzin</li>
  <li><strong>Elektrostart</strong> – Ja</li>
  <li><strong>Kraftstofftank</strong> – 23 Liter</li>
  <li><strong>Lenkung</strong> – Zwei-Hebel-Lenkung, Null-Wendekreis</li>
  <li><strong>Getriebe</strong> – Parker HTE Getriebe</li>
  <li><strong>Kraftstofffüllstandanzeige</strong> – LED Tankanzeige</li>
  <li><strong>Antrieb</strong> – Hinterradantrieb</li>
  <li><strong>Max. Geschwindigkeit</strong> – 14 km/h</li>
  <li><strong>Reifengröße vorne</strong> – 13×6,5</li>
  <li><strong>Reifengröße hinten</strong> – 23×10,50-12″</li>
  <li><strong>Wendekreis</strong> – 0 cm</li>
  <li><strong>Schnittbreite</strong> – 137 cm</li>
  <li><strong>Anzahl Messer</strong> – 3</li>
  <li><strong>Schnitthöhen</strong> – 38–114 mm</li>
  <li><strong>Anzahl Schnitthöhen</strong> – 13</li>
  <li><strong>Schnitthöhenverstellung</strong> – Manuell</li>
  <li><strong>Mähmethoden</strong> – Seitenauswurf, Mulchen, Fangen</li>
  <li><strong>Mähwerkseinschaltung</strong> – Elektromagnetisch</li>
  <li><strong>Wasserschlauchanschluss</strong> – Ja</li>
  <li><strong>Mähwerkstyp</strong> – 10-gauge fabricated</li>
  <li><strong>Mähen im Rückwärtsgang</strong> – Ja</li>
  <li><strong>Sitz</strong> – Gefederter Premiumsitz, vollgefedert</li>
  <li><strong>Schutzbügel</strong> – Überrollschutz (ROPS)</li>
  <li><strong>Betriebsstundenzähler</strong> – Mit Servicealarm</li>
  <li><strong>Automatische Parkbremse</strong> – Ja</li>
  <li><strong>Gewicht</strong> – 392,4 kg</li>
  <li><strong>Abmessungen (L×B×H)</strong> – 194 × 140 × 127 cm</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Lieferumfang</h3>
<ul class="space-y-1 mb-3">
  <li>Grundgerät – 1</li>
  <li>Bedienungsanleitung Gerät – 1</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Tondeuse Zero Turn professionnelle Z454X – incl. plateau – Modèle 2023</h2>

<p class="mb-3">Ce produit est soumis avant livraison à une inspection gratuite conformément aux directives Husqvarna PDI. Livré monté, prêt à l'emploi avec le protocole Husqvarna.</p>

<p class="mb-3">La Husqvarna Z454X est une tondeuse à rayon de braquage nul professionnelle conçue pour les paysagistes et les propriétaires de grandes surfaces. Moteur Kawasaki puissant, transmission intégrée, frein de stationnement intégré et siège suspendu. Éjection latérale avec option mulching.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Kawasaki FR Series V-Twin, 726 cm³, 16,1 kW</li>
  <li><strong>Réservoir</strong> – 23 litres</li>
  <li><strong>Largeur de coupe</strong> – 137 cm</li>
  <li><strong>Hauteur de coupe</strong> – 38–114 mm (13 positions)</li>
  <li><strong>Vitesse max.</strong> – 14 km/h</li>
  <li><strong>Poids</strong> – 392,4 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Zero Turn Professional Mower Z454X – incl. cutting deck – Model 2023</h2>

<p class="mb-3">This product undergoes a free pre-delivery inspection in accordance with Husqvarna PDI guidelines. Delivered assembled, ready for use, with the Husqvarna inspection protocol.</p>

<p class="mb-3">The Husqvarna Z454X is a professional zero-turn mower designed for professional landscapers and property owners with larger lawns. Features a powerful Kawasaki engine, smooth integrated transmission, integrated parking brake and suspended seat. Side discharge with mulching option.</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Kawasaki FR Series V-Twin, 726 cc, 16.1 kW</li>
  <li><strong>Fuel tank</strong> – 23 litres</li>
  <li><strong>Cutting width</strong> – 137 cm</li>
  <li><strong>Cutting height</strong> – 38–114 mm (13 positions)</li>
  <li><strong>Max. speed</strong> – 14 km/h</li>
  <li><strong>Weight</strong> – 392.4 kg</li>
</ul>`,
    price_eur: 5452.00,
    image_url: "/40.jpg",
    gallery: ["/40.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-21T10:00:00Z",
  },
  {
    id: "prod-41",
    slug: "husqvarna-zero-turn-z242f",
    category_id: "cat-2",
    name_de: "Husqvarna Zero Turn Z242F",
    name_fr: "Husqvarna Zero Turn Z242F",
    name_en: "Husqvarna Zero Turn Z242F",
    description_de: `<h2 class="text-lg font-semibold mb-3">Husqvarna Zero Turn Z242F</h2>

<p class="mb-3">Der Zero Turn Rider Z 242F setzt neue Maßstäbe in der Rasenpflege. Angetrieben von einem leistungsstarken Kawasaki-Motor, erreichen Sie mit diesem Nullwendekreismäher jeden Winkel Ihres Grundstückes und können sogar exakt Ihren Baumbestand frei mähen. Die Schnitthöhenverstellung ist bedienerfreundlich auf der Konsole montiert.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Motorhersteller</strong> – Briggs & Stratton</li>
  <li><strong>Motortyp</strong> – M44</li>
  <li><strong>Hubraum</strong> – 724 cm³</li>
  <li><strong>Zylinder</strong> – 2</li>
  <li><strong>Kraftstoffsorte</strong> – Benzin</li>
  <li><strong>Tankvolumen</strong> – 13,25 l</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Husqvarna Zero Turn Z242F</h2>

<p class="mb-3">Le Zero Turn Rider Z 242F établit de nouvelles normes en matière d'entretien des pelouses. Propulsé par un puissant moteur Kawasaki, cette tondeuse à rayon de braquage nul atteint chaque recoin de votre propriété.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – Briggs & Stratton M44, 724 cm³</li>
  <li><strong>Réservoir</strong> – 13,25 l</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Husqvarna Zero Turn Z242F</h2>

<p class="mb-3">The Zero Turn Rider Z 242F sets new standards in lawn care. Powered by a powerful Kawasaki engine, this zero-turn mower reaches every corner of your property.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – Briggs & Stratton M44, 724 cc</li>
  <li><strong>Fuel tank</strong> – 13.25 l</li>
</ul>`,
    price_eur: 3378.00,
    image_url: "/41-1.webp",
    gallery: ["/41-1.webp", "/41-2.webp", "/41-3.webp", "/41-4.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-22T10:00:00Z",
  },
  {
    id: "prod-42",
    slug: "mtd-60-rde-minirider-aufsitzmaher-mit-schneeschild-100",
    category_id: "cat-2",
    name_de: "MTD 60 RDE MiniRider Aufsitzmäher mit Schneeschild 100",
    name_fr: "MTD 60 RDE MiniRider Tracteur tondeuse avec lame à neige 100",
    name_en: "MTD 60 RDE MiniRider Ride-on Mower with Snow Blade 100",
    description_de: `<h2 class="text-lg font-semibold mb-3">MTD 60 RDE MiniRider Aufsitzmäher mit Schneeschild 100</h2>

<p class="mb-3">Der neue MTD MINIRIDER Aufsitzmäher 60 RDE mit Transmatik-Getriebe ist ein wahrer Alleskönner: Er kann wahlweise das Schnittgut auffangen, auswerfen oder mulchen (Zubehör gegen Aufpreis erhältlich).</p>

<ul class="space-y-1 mb-3">
  <li>Schnittbreite 60 cm</li>
  <li>Batterie Elektrostart</li>
  <li>Transmatic Getriebe</li>
  <li>Inkl. Fangbox 150 l</li>
  <li>Rasenflächen bis 1500 m²</li>
</ul>

<p class="mb-3">Dieser MTD Aufsitzmäher oder MINI Rider mit Batterie Elektrostart ist der ideale Rasenmäher für kleine bis mittelgroße Gärten bis 1500 m², in denen der Einsatz eines Traktors durch Beete, Sträucher oder sonstige Hindernisse eingeschränkt wird.</p>

<p class="mb-3"><strong>Winterpaket inklusive:</strong> 100 cm Schneeschild, Gummileiste, Anbaurahmen mit Aushebung</p>

<h3 class="font-semibold mb-2 mt-5">Produkt Vorteile</h3>
<ul class="space-y-1 mb-3">
  <li>Nimmt kaum mehr Platz in Anspruch als vergleichbare handgeführte Rasenmäher</li>
  <li>Wendig und kompakt, nach Gebrauch platzsparend aufbewahrbar</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Schnittbreite</strong> – 60 cm</li>
  <li><strong>Motor</strong> – MTD, 1 Zylinder, 196 ccm</li>
  <li><strong>Start</strong> – Elektrostart</li>
  <li><strong>Schnitthöhenverstellung</strong> – 5 Positionen, 38–95 mm</li>
  <li><strong>Getriebe</strong> – Transmatik</li>
  <li><strong>Treibstofftank</strong> – 1,2 l</li>
  <li><strong>Grasfangeinrichtung</strong> – 150 l</li>
  <li><strong>Mulchkit und Heckdeflektor</strong> – Als Zubehör erhältlich (Art.Nr.: 196-707-678)</li>
  <li><strong>Räder (v/h)</strong> – 13″×5″ / 16″×6,5″</li>
  <li><strong>Gewicht</strong> – ca. 140 kg</li>
  <li><strong>Maße (L×B×H)</strong> – 192 × 83 × 112 cm</li>
  <li><strong>Wenderadius</strong> – 46 cm</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Stahlräumschild Schneeschild 100 cm mit Gummileiste</h3>
<ul class="space-y-1 mb-3">
  <li>Passend für Mini Aufsitzmäher MTD, Cub Cadet, Wolf Garten mit 60 cm / 76 cm Mähwerk</li>
  <li>Arbeitsbreite 100 cm, Schneeschildhöhe ca. 35 cm</li>
  <li>Aushebung vom Fahrersitz</li>
  <li>Seitlich schwenkbar in 5 Positionen</li>
  <li>Gummileiste auswechselbar</li>
  <li>Inkl. Anbaurahmen</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">MTD 60 RDE MiniRider Tracteur tondeuse avec lame à neige 100</h2>

<p class="mb-3">Le nouveau MTD MINIRIDER 60 RDE avec transmission Transmatik est un véritable polyvalent : il peut ramasser, éjecter ou mulcher l'herbe (accessoire en option).</p>

<ul class="space-y-1 mb-3">
  <li>Largeur de coupe 60 cm</li>
  <li>Démarrage électrique</li>
  <li>Transmission Transmatic</li>
  <li>Bac de ramassage 150 l</li>
  <li>Jusqu'à 1500 m²</li>
</ul>

<p class="mb-3"><strong>Pack Hiver inclus :</strong> Lame à neige 100 cm, bande caoutchouc, châssis de montage</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – MTD 1 cyl., 196 cm³</li>
  <li><strong>Largeur de coupe</strong> – 60 cm</li>
  <li><strong>Bac</strong> – 150 l</li>
  <li><strong>Poids</strong> – 140 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">MTD 60 RDE MiniRider Ride-on Mower with Snow Blade 100</h2>

<p class="mb-3">The new MTD MINIRIDER 60 RDE with Transmatik transmission is a true all-rounder: it can collect, discharge or mulch grass clippings (accessory extra).</p>

<ul class="space-y-1 mb-3">
  <li>Cutting width 60 cm</li>
  <li>Electric start</li>
  <li>Transmatic transmission</li>
  <li>150 l grass collector</li>
  <li>Up to 1500 m²</li>
</ul>

<p class="mb-3"><strong>Winter Package included:</strong> Snow blade 100 cm, rubber strip, mounting frame</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – MTD 1 cyl., 196 cc</li>
  <li><strong>Cutting width</strong> – 60 cm</li>
  <li><strong>Collector</strong> – 150 l</li>
  <li><strong>Weight</strong> – 140 kg</li>
</ul>`,
    price_eur: 1299.00,
    image_url: "/42-1.jpg",
    gallery: ["/42-1.jpg", "/42-2.jpg", "/42-3.jpg", "/42-4.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-23T10:00:00Z",
  },
  {
    id: "prod-43",
    slug: "mtd-76-rasentraktor",
    category_id: "cat-2",
    name_de: "MTD 76 Rasentraktor",
    name_fr: "MTD 76 Tracteur tondeuse",
    name_en: "MTD 76 Lawn Tractor",
    description_de: `<h2 class="text-lg font-semibold mb-3">MTD 76 Rasentraktor</h2>

<p class="mb-3">Die MTD-Einsteigerserie bietet grundlegende Features für die bequeme Gartenarbeit. Mit einer Schnittbreite von 76 cm und einem kleinen Wendekreis von nur 46 cm ist dieser Rasentraktor ideal für große Flächen bis 3.000 m² geeignet, wobei auch Bäume und Sträucher kein Hindernis darstellen. Der Motor lässt sich einfach per E-Starter anwerfen, bevor die Steuerung der Geschwindigkeit ganz komfortabel über die 6-Gang-Transmatic-Steuerung erfolgt. Genauso einfach lässt sich die Schnitthöhe an einem Hebel in fünf Positionen zwischen 30 und 95 mm verstellen. Im Lieferumfang enthalten ist zudem der 200 l-Fangsack, durch den der separate Arbeitsschritt des Einsammelns von Schnittgut entfällt. Auch der Heckdeflektor ist inklusive. Schließlich erweist sich das Frontlicht als nützliches Feature, durch welches das Arbeiten auch in der Dämmerung möglich ist.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Anzahl Messer</strong> – 1</li>
  <li><strong>Anzahl Gänge (V/R)</strong> – 6 / 6</li>
  <li><strong>Auswurf</strong> – Heckauswurf</li>
  <li><strong>Wenderadius</strong> – 46 cm</li>
  <li><strong>Geschwindigkeit maximal</strong> – 8 km/h</li>
  <li><strong>Empfohlene Rasenfläche</strong> – 3000 m²</li>
  <li><strong>Ausstattung</strong> – Scheinwerfer</li>
  <li><strong>Gesamtlänge</strong> – 224 cm</li>
  <li><strong>Volumen Auffangbehälter</strong> – 200 l</li>
  <li><strong>Fangvorrichtung</strong> – Fangsack</li>
  <li><strong>Geräteleistung</strong> – 9,25 PS / 6,8 kW</li>
  <li><strong>Geräuschpegel</strong> – 88 dB</li>
  <li><strong>Schnitthöhe</strong> – 30–95 mm, 5-fach</li>
  <li><strong>Art Motor</strong> – Benzinmotor</li>
  <li><strong>Motorhersteller</strong> – MTD</li>
  <li><strong>Schnittbreite</strong> – 76 cm</li>
  <li><strong>Fassungsvermögen Tank</strong> – 3,8 l</li>
  <li><strong>Getriebe</strong> – Transmaticgetriebe</li>
  <li><strong>Hubraum</strong> – 382 cm³</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">MTD 76 Tracteur tondeuse</h2>

<p class="mb-3">La série d'entrée de gamme MTD offre les fonctions de base pour un jardinage confortable. Avec une largeur de coupe de 76 cm et un rayon de braquage de seulement 46 cm, ce tracteur est idéal pour les grandes surfaces jusqu'à 3 000 m².</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Largeur de coupe</strong> – 76 cm</li>
  <li><strong>Moteur</strong> – MTD, 382 cm³, 6,8 kW</li>
  <li><strong>Bac</strong> – 200 l</li>
  <li><strong>Transmission</strong> – Transmatic 6 vitesses</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">MTD 76 Lawn Tractor</h2>

<p class="mb-3">The MTD entry-level series offers basic features for comfortable gardening. With a 76 cm cutting width and a turning radius of just 46 cm, this lawn tractor is ideal for large areas up to 3,000 m².</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Cutting width</strong> – 76 cm</li>
  <li><strong>Engine</strong> – MTD, 382 cc, 6.8 kW</li>
  <li><strong>Collector</strong> – 200 l</li>
  <li><strong>Transmission</strong> – Transmatic 6-speed</li>
</ul>`,
    price_eur: 1875.00,
    image_url: "/43-1.webp",
    gallery: ["/43-1.webp", "/43-2.webp", "/43-3.webp", "/43-4.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-24T10:00:00Z",
  },
  {
    id: "prod-44",
    slug: "mtd-92-rasentraktor",
    category_id: "cat-2",
    name_de: "MTD 92 Rasentraktor",
    name_fr: "MTD 92 Tracteur tondeuse",
    name_en: "MTD 92 Lawn Tractor",
    description_de: `<h2 class="text-lg font-semibold mb-3">MTD 92 Rasentraktor</h2>

<p class="mb-3">Der MTD 92 ist ein robuster Rasentraktor mit Heckauswurf und 92 cm Schnittbreite, geeignet für Rasenflächen bis 3.500 m². Der 382 ccm MTD-Einzylinder leistet starke 7,1 kW und ist auch für schwierigere Geländeformen geeignet. Das robuste Transmatic-Getriebe mit 6 Vorwärts- und 6 Rückwärtsgängen, die pendelnd aufgehängte Vorderachse sowie der kleine Wendekreis von nur 46 cm machen ihn besonders wendig. Der mitgelieferte Fangkorb hat ein Volumen von 240 l, optional kann der MTD 92 mit einem Mulchkit ausgestattet werden. Das stabile Stahl-Mähwerk mit 2 Messern ist in 5 Stufen von 30 bis 95 mm verstellbar. Mit den hellen Frontscheinwerfern ist auch das Arbeiten in der Dämmerung kein Problem.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Anzahl Messer</strong> – 2</li>
  <li><strong>Anzahl Gänge (V/R)</strong> – 6 / 6</li>
  <li><strong>Auswurf</strong> – Heckauswurf</li>
  <li><strong>Wenderadius</strong> – 46 cm</li>
  <li><strong>Geschwindigkeit maximal</strong> – 8 km/h</li>
  <li><strong>Empfohlene Rasenfläche</strong> – 3500 m²</li>
  <li><strong>Scheinwerfer</strong> – Ja</li>
  <li><strong>Gesamtlänge</strong> – 200 cm</li>
  <li><strong>Volumen Auffangbehälter</strong> – 240 l</li>
  <li><strong>Fangvorrichtung</strong> – Hardtop-Sack</li>
  <li><strong>Geräteleistung</strong> – 9,7 PS / 7,1 kW</li>
  <li><strong>Motorleistung</strong> – 12,5 PS / 9,2 kW</li>
  <li><strong>Geräuschpegel</strong> – 88 dB</li>
  <li><strong>Schnitthöhe</strong> – 30–95 mm, 5-fach</li>
  <li><strong>Motor</strong> – Benzinmotor, MTD, 382 cm³</li>
  <li><strong>Schnittbreite</strong> – 92 cm</li>
  <li><strong>Tank</strong> – 3,8 l</li>
  <li><strong>Getriebe</strong> – Transmaticgetriebe</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">MTD 92 Tracteur tondeuse</h2>

<p class="mb-3">Le MTD 92 est un tracteur tondeuse robuste avec éjection arrière et 92 cm de largeur de coupe, adapté aux pelouses jusqu'à 3 500 m². Moteur MTD 382 cm³ développant 7,1 kW, transmission Transmatic 6 vitesses, rayon de braquage de 46 cm.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Largeur de coupe</strong> – 92 cm</li>
  <li><strong>Bac</strong> – 240 l</li>
  <li><strong>Moteur</strong> – MTD, 382 cm³, 7,1 kW</li>
  <li><strong>Transmission</strong> – Transmatic 6 vitesses</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">MTD 92 Lawn Tractor</h2>

<p class="mb-3">The MTD 92 is a robust lawn tractor with rear discharge and 92 cm cutting width, suitable for lawns up to 3,500 m². MTD 382 cc engine delivering 7.1 kW, Transmatic 6-speed transmission, 46 cm turning radius.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Cutting width</strong> – 92 cm</li>
  <li><strong>Collector</strong> – 240 l</li>
  <li><strong>Engine</strong> – MTD, 382 cc, 7.1 kW</li>
  <li><strong>Transmission</strong> – Transmatic 6-speed</li>
</ul>`,
    price_eur: 780.00,
    image_url: "/44-1.webp",
    gallery: ["/44-1.webp", "/44-2.webp", "/44-3.webp", "/44-4.webp", "/44-5.webp"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-25T10:00:00Z",
  },
  {
    id: "prod-45",
    slug: "mtd-96-seitenauswurf-rasentraktor",
    category_id: "cat-2",
    name_de: "MTD 96 Seitenauswurf Rasentraktor",
    name_fr: "MTD 96 Tracteur tondeuse éjection latérale",
    name_en: "MTD 96 Side Discharge Lawn Tractor",
    description_de: `<h2 class="text-lg font-semibold mb-3">MTD 96 Seitenauswurf Rasentraktor – 7,5 kW</h2>

<p class="mb-3">Mit dem MTD Aufsitzrasenmäher 96 werden Sie eine außergewöhnliche Mähqualität Ihres Rasens erreichen, und das mit verblüffender Leichtigkeit. Sein einzylindriger MTD-Motor mit 382 cm³ entwickelt eine Leistung von 8,0 kW und ist selbst auf Hängen leistungsstark. Die Pumpe und der Ölfilter gewährleisten eine optimale Schmierung und hervorragende Zuverlässigkeit. Das Transmatic-Getriebe bietet große Benutzerfreundlichkeit – Geschwindigkeitswechsel ohne Anhalten oder Kuppeln. Der kurze Wendekreis von 46 cm ermöglicht eine sehr hohe Wendigkeit.</p>

<p class="mb-3">Der Sitz ist verstellbar und passt sich Ihrer Körperform an. Der Scheinwerfer ermöglicht sicheres Mähen bei nachlassender Helligkeit. Die seitliche Auswurfvorrichtung erlaubt die Bearbeitung großer Flächen sowie hohem Gras. Die beiden Anti-Scalping-Räder am Mähwerk ermöglichen einen sauberen und präzisen Schnitt.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Leistung</strong> – 7,5 kW</li>
  <li><strong>Kraftstoff</strong> – Benzin bleifrei</li>
  <li><strong>Tankvolumen</strong> – 3,8 l</li>
  <li><strong>Motor Typ</strong> – 4-Takt</li>
  <li><strong>Flächenempfehlung</strong> – Bis zu 4000 m²</li>
  <li><strong>Schnittbreite</strong> – 96 cm</li>
  <li><strong>Schneidsystem</strong> – Seitenauswurf</li>
  <li><strong>Hubraum</strong> – 382 cm³</li>
  <li><strong>Kraftübertragung</strong> – Transmatic</li>
  <li><strong>Anzahl der Messer</strong> – 2</li>
  <li><strong>Höhenverstellung</strong> – 5-fach, 30–95 mm</li>
  <li><strong>Fangvorrichtung</strong> – Optional erhältlich</li>
  <li><strong>Mulchkit</strong> – Optional erhältlich</li>
  <li><strong>Anzahl Gänge</strong> – 6 Vorwärts- und Rückwärtsstufen</li>
  <li><strong>Motorfabrikat</strong> – MTD</li>
  <li><strong>Material Mähdeck</strong> – Stahlblech</li>
  <li><strong>Gewicht</strong> – 149 kg</li>
  <li><strong>Scheinwerfer</strong> – Ja</li>
  <li><strong>Schalldruckpegel (LpA)</strong> – 88 dB</li>
  <li><strong>Schallleistungspegel (LWA)</strong> – 98 dB</li>
  <li><strong>Wendekreis</strong> – 46 cm</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">MTD 96 Tracteur tondeuse éjection latérale – 7,5 kW</h2>

<p class="mb-3">Avec le MTD 96, vous obtiendrez une qualité de tonte exceptionnelle avec une facilité déconcertante. Moteur MTD monocylindre de 382 cm³ développant 8,0 kW, transmission Transmatic, rayon de braquage de 46 cm.</p>

<h3 class="font-semibold mb-2 mt-5">Détails</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Puissance</strong> – 7,5 kW</li>
  <li><strong>Largeur de coupe</strong> – 96 cm</li>
  <li><strong>Moteur</strong> – MTD, 382 cm³</li>
  <li><strong>Transmission</strong> – Transmatic</li>
  <li><strong>Poids</strong> – 149 kg</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">MTD 96 Side Discharge Lawn Tractor – 7.5 kW</h2>

<p class="mb-3">With the MTD 96 ride-on mower you will achieve exceptional mowing quality with astonishing ease. Single-cylinder MTD engine with 382 cc delivering 8.0 kW, Transmatic transmission, 46 cm turning radius.</p>

<h3 class="font-semibold mb-2 mt-5">Details</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Power</strong> – 7.5 kW</li>
  <li><strong>Cutting width</strong> – 96 cm</li>
  <li><strong>Engine</strong> – MTD, 382 cc</li>
  <li><strong>Transmission</strong> – Transmatic</li>
  <li><strong>Weight</strong> – 149 kg</li>
</ul>`,
    price_eur: 1186.00,
    image_url: "/45-1.jpg",
    gallery: ["/45-1.jpg", "/45-2.jpg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-06-26T10:00:00Z",
  },
  {
    id: "prod-46",
    slug: "benzin-motorsage-431sx",
    category_id: "cat-3",
    name_de: "Benzin-Motorsäge 431sx",
    name_fr: "Tronçonneuse essence 431sx",
    name_en: "Petrol Chainsaw 431sx",
    description_de: `<h2 class="text-lg font-semibold mb-3">Benzin-Motorsäge 431sx</h2>

<p class="mb-3">Die 431sx beeindruckt mit einer Leistung von 2,3 kW und einem Gewicht von nur 4,3 kg. Die serienmäßige Sugihara-Führungsschiene mit Kunststoff-Inletts trägt erheblich zu diesem geringen Gewicht bei, wodurch sie zur leichtesten Profi-Motorsäge ihrer Klasse zählt.</p>

<p class="mb-3">Der drehmomentstarke 2-Takt-Motor mit einem Hubraum von 42,9 cm³ sorgt für schnelle und saubere Schnitte. Diese vielseitige Profi-Motorsäge eignet sich hervorragend für den Einsatz im Forst, sei es beim Fällen oder Aufarbeiten von mittleren bis starken Beständen.</p>

<p class="mb-3">Ein Zentrifugal-Staubabschneidesystem reduziert den Wartungsaufwand für den Luftfilter erheblich. Der praktische Flip-Tankdeckel ermöglicht ein einfaches und schnelles Nachfüllen des Kraftstoffs. Der automatisch arbeitende Start-/Stoppschalter erleichtert den Startvorgang, während das G-Force-Luftfilterreinigungssystem den Motor vor Schmutz und Ablagerungen schützt.</p>

<h3 class="font-semibold mb-2 mt-5">Funktionen</h3>
<ul class="space-y-1 mb-3">
  <li>5 Jahre Garantie (privat) / 2 Jahre (gewerblich)</li>
  <li>100% Profi-Qualität</li>
  <li>Leichtstart – Federmechanismus und Regelelektronik unterstützen die Anzugskräfte</li>
  <li>G-Force Luftfilterreinigung – verlängert Standzeit und verbessert Motorleistung</li>
  <li>Anschlagkralle – fixiert die Säge am Holz für kontrolliertes Sägen</li>
  <li>Choke mit automatischer Drehzahlerhöhung für leichteren Kaltstart</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Antrieb</strong> – Benzin 2-Takt</li>
  <li><strong>Hubraum</strong> – 42,9 cm³</li>
  <li><strong>Leistung</strong> – 2,3 kW</li>
  <li><strong>Gewicht</strong> – 4,3 kg</li>
  <li><strong>Schienenlänge</strong> – 40 cm</li>
  <li><strong>Kettenteilung</strong> – .325″</li>
  <li><strong>Nutbreite</strong> – 1,27 mm</li>
  <li><strong>Antivibrationssystem</strong> – Ja</li>
  <li><strong>Kettenspanner seitlich</strong> – Ja</li>
  <li><strong>Dekompressionsventil</strong> – Ja</li>
  <li><strong>Max. Kraftstofftankinhalt</strong> – 0,50 l</li>
  <li><strong>Max. Öltankinhalt</strong> – 0,28 l</li>
  <li><strong>Automatische Ölschmierung</strong> – Ja</li>
  <li><strong>Ölmenge einstellbar</strong> – Ja</li>
  <li><strong>Vibrationswerte</strong> – 3,3 / 3,1 m/s²</li>
  <li><strong>Schalldruckpegel</strong> – 103,1 dB(A)</li>
  <li><strong>Garantierter Schallleistungspegel</strong> – 117 dB(A)</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Tronçonneuse essence 431sx</h2>

<p class="mb-3">La 431sx impressionne avec une puissance de 2,3 kW et un poids de seulement 4,3 kg. Le guide Sugihara avec inserts en plastique contribue à ce faible poids, ce qui en fait la tronçonneuse professionnelle la plus légère de sa catégorie.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Moteur</strong> – 2-temps essence, 42,9 cm³</li>
  <li><strong>Puissance</strong> – 2,3 kW</li>
  <li><strong>Poids</strong> – 4,3 kg</li>
  <li><strong>Longueur du guide</strong> – 40 cm</li>
  <li><strong>Réservoir carburant</strong> – 0,50 l</li>
  <li><strong>Réservoir huile</strong> – 0,28 l</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Petrol Chainsaw 431sx</h2>

<p class="mb-3">The 431sx impresses with 2.3 kW of power and a weight of just 4.3 kg. The standard Sugihara guide bar with plastic inlays contributes to this low weight, making it the lightest professional chainsaw in its class.</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Engine</strong> – 2-stroke petrol, 42.9 cc</li>
  <li><strong>Power</strong> – 2.3 kW</li>
  <li><strong>Weight</strong> – 4.3 kg</li>
  <li><strong>Bar length</strong> – 40 cm</li>
  <li><strong>Fuel tank</strong> – 0.50 l</li>
  <li><strong>Oil tank</strong> – 0.28 l</li>
</ul>`,
    price_eur: 583.00,
    image_url: "/46-1.jpg",
    gallery: ["/46-1.jpg", "/46-2.jpg", "/46-3.jpg"],
    is_hot: true,
    stock: 99,
    created_at: "2026-06-27T10:00:00Z",
  },
  {
    id: "prod-47",
    slug: "dolmar-ps-6100",
    category_id: "cat-3",
    name_de: "Dolmar PS-6100 / 53 cm – 3/8",
    name_fr: "Dolmar PS-6100 / 53 cm – 3/8",
    name_en: "Dolmar PS-6100 / 53 cm – 3/8",
    description_de: `<h2 class="text-lg font-semibold mb-3">Dolmar PS-6100 / 53 cm – 3/8</h2>

<p class="mb-3">Die PS 6100 übernimmt die Aufgaben, für die früher eine Entastungs- und eine Fällsäge separat eingesetzt wurden. Besonders bei weiter entfernten Einsatzorten, die zu Fuß erreicht werden müssen, ist der Transport von nur einer Säge eine deutliche Erleichterung.</p>

<ul class="space-y-1 mb-3">
  <li>Großer 0,80 l Kraftstofftank für extrem lange Laufzeiten von bis zu 30 min</li>
  <li>MM2 Stratified-Air-Scavenging-Technology – bis zu 20 % weniger Kraftstoffverbrauch und reduzierte Emissionen</li>
  <li>Kraftvoll mit hohem Drehmoment</li>
  <li>Fliehkraft-Vorreinigung reduziert Schmutzpartikel aus der Ansaugluft</li>
  <li>Memory Power Ignition (MPI) für leichten Wiederstart</li>
  <li>Stahlfeder-Dämpfung für reduzierte Vibrationen</li>
  <li>Seitlicher Kettenspanner für unkompliziertes Nachspannen</li>
  <li>Einstellbare Kettenölpumpe ohne Förderung im Leerlauf</li>
  <li>Dreiteilige Fliehkraftkupplung mit Servowirkung</li>
  <li>SafetyMatic Kettenbremse stoppt die Kette bei Rückschlag</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Besondere Merkmale</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Touch&Stop</strong> – Motor stoppt nach kurzem Antippen des Hebels</li>
  <li><strong>Primerpumpe</strong> – für leichten Kaltstart</li>
  <li><strong>Longlife Filtersystem</strong> – ultralange Standzeit, ohne Werkzeug demontierbar</li>
  <li><strong>EasyStart</strong> – federunterstützte Überwindung des Kompressionswiderstands</li>
  <li><strong>Einteilige Motorhaube</strong> – für einfache Wartung</li>
</ul>

<h3 class="font-semibold mb-2 mt-5">Technische Daten</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Hubraum</strong> – 61,0 cm³</li>
  <li><strong>Leistung</strong> – 3,4 kW (4,6 PS)</li>
  <li><strong>Tankvolumen</strong> – 800 ml</li>
  <li><strong>Öltank</strong> – 480 ml</li>
  <li><strong>Ölpumpe</strong> – Automatisch</li>
  <li><strong>Gewicht (exkl. Schneidausrüstung)</strong> – 6,0 kg</li>
  <li><strong>Schwertlänge</strong> – 53 cm (21″)</li>
  <li><strong>Kettenteilung</strong> – 3/8″</li>
  <li><strong>Nutbreite</strong> – 1,5 mm</li>
  <li><strong>Zahnform</strong> – Vollmeisel (VM)</li>
  <li><strong>Seitliche Kettenspannung</strong> – Ja</li>
  <li><strong>Vibrationsdämpfung</strong> – Ja</li>
  <li><strong>Schalldruckpegel</strong> – 105 dB(A)</li>
  <li><strong>Schallleistungspegel</strong> – 117 dB(A)</li>
</ul>`,
    description_fr: `<h2 class="text-lg font-semibold mb-3">Dolmar PS-6100 / 53 cm – 3/8</h2>

<p class="mb-3">La PS 6100 combine les tâches pour lesquelles une scie d'élagage et une scie d'abattage étaient auparavant utilisées séparément.</p>

<h3 class="font-semibold mb-2 mt-5">Données techniques</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Cylindrée</strong> – 61,0 cm³</li>
  <li><strong>Puissance</strong> – 3,4 kW (4,6 ch)</li>
  <li><strong>Réservoir carburant</strong> – 800 ml</li>
  <li><strong>Réservoir huile</strong> – 480 ml</li>
  <li><strong>Poids</strong> – 6,0 kg</li>
  <li><strong>Longueur du guide</strong> – 53 cm</li>
</ul>`,
    description_en: `<h2 class="text-lg font-semibold mb-3">Dolmar PS-6100 / 53 cm – 3/8</h2>

<p class="mb-3">The PS 6100 takes on the tasks for which a delimber and a felling saw were previously used separately.</p>

<h3 class="font-semibold mb-2 mt-5">Technical Data</h3>
<ul class="space-y-1 mb-3">
  <li><strong>Displacement</strong> – 61.0 cc</li>
  <li><strong>Power</strong> – 3.4 kW (4.6 hp)</li>
  <li><strong>Fuel tank</strong> – 800 ml</li>
  <li><strong>Oil tank</strong> – 480 ml</li>
  <li><strong>Weight</strong> – 6.0 kg</li>
  <li><strong>Bar length</strong> – 53 cm</li>
</ul>`,
    price_eur: 683.00,
    image_url: "/47-1.jpg",
    gallery: ["/47-1.jpg", "/47-2.jpg", "/47-3.jpg"],
    is_hot: true,
    stock: 100,
    created_at: "2026-06-28T10:00:00Z",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return [...products].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
}

export function getSimilarProducts(categoryId: string, productId: string, limit = 4): Product[] {
  return products
    .filter((p) => p.category_id === categoryId && p.id !== productId)
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    .slice(0, limit)
}

export function getNavProducts(categoryId: string): { slug: string }[] {
  return products
    .filter((p) => p.category_id === categoryId)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((p) => ({ slug: p.slug }))
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export type Order = {
  id: string
  email: string
  full_name: string
  address: string
  city: string
  postal_code: string
  country: string
  phone: string | null
  notes: string | null
  total_eur: number
  status: string
  created_at: string
  order_items: OrderItem[]
}

export type OrderItem = {
  product_name: string
  unit_price_eur: number
  quantity: number
}

export function saveOrder(order: Omit<Order, 'id' | 'created_at' | 'status'>) {
  const orders = getOrders()
  const newOrder: Order = {
    ...order,
    id: `ord-${Date.now()}`,
    status: 'pending',
    created_at: new Date().toISOString(),
  }
  orders.push(newOrder)
  localStorage.setItem('orders', JSON.stringify(orders))
  return newOrder
}

export function getOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem('orders') || '[]')
  } catch {
    return []
  }
}
