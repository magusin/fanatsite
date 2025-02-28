import SEOHead from "C/components/SEOHead";

export default function CGU() {
    return (
        <div className="min-h-screen text-white">
            <SEOHead
                title="Fanatsy - Développeur Web | CGU"
                description="Découvrez les Conditions Générales d'Utilisation du site fanatsy.dev, dédié au développement web, à la création de sites internet et applications responsives et optimisées pour le SEO."
                url="https://fanatsy.dev/cgu"
            />

            <main className="flex flex-col items-center text-left py-16 px-6 max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-100 mb-8 text-center">Conditions Générales d’Utilisation (CGU)</h1>

                {/* SECTION 1 - Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">1. Introduction</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Les présentes Conditions Générales d’Utilisation régissent l’accès et l’utilisation du site <strong>Fanatsy</strong>, accessible à l’adresse 
                        <a href="https://fanatsy.dev/" className="text-green-400 hover:underline"> https://fanatsy.dev/</a>.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mt-4">
                        Le site est exploité par <strong>Hugo JACQUES</strong>, auto-entrepreneur domicilié à <strong>Valdivienne</strong>, immatriculé sous le numéro <strong> 934 687 898 </strong>
                        et joignable à l’adresse e-mail suivante :
                        <a href="mailto:fanatsy.dev@gmail.com" className="text-green-400 hover:underline"> fanatsy.dev@gmail.com</a>.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mt-4">
                        Fanatsy est une plateforme spécialisée dans le <strong>développement web</strong>, proposant des services de <strong>création de sites internet</strong> et
                        <strong> d’applications modernes</strong>. Le site s’adresse à tout public, sans distinction entre professionnels et particuliers.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mt-4">
                        En accédant et en utilisant le site, l’utilisateur reconnaît avoir pris connaissance des présentes CGU et s’engage à les respecter.
                    </p>
                </section>

                {/* SECTION 2 - Objet des CGU */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">2. Objet des CGU</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Les présentes CGU ont pour objet de définir les conditions dans lesquelles les utilisateurs peuvent accéder au site et utiliser les services proposés. Elles précisent également les droits et obligations de l’éditeur du site et des utilisateurs.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        L’utilisation du site implique l’acceptation sans réserve des présentes CGU. En cas de désaccord avec celles-ci, l’utilisateur doit cesser immédiatement d’utiliser le site.
                    </p>
                </section>

                {/* SECTION 3 - Accès au site */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">3. Accès au Site</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Le site est accessible <strong>gratuitement</strong> à tout utilisateur disposant d’un accès à Internet. Tous les frais liés à l’accès au site (connexion Internet, matériel informatique, logiciels, etc.) sont à la charge de l’utilisateur.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        L’éditeur du site met en œuvre tous les moyens raisonnables pour assurer un accès de qualité, mais ne garantit pas une disponibilité continue et sans interruption. Il se réserve le droit de suspendre, limiter ou interrompre l’accès au site à tout moment, notamment pour des raisons de maintenance ou de mise à jour.
                    </p>
                </section>

                {/* SECTION 4 - Services proposés */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">4. Services proposés</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Le site est une passerelle d’information sur les services proposés par Hugo JACQUES. Il permet aux utilisateurs de découvrir les prestations de l’éditeur, de consulter des exemples de réalisations et de prendre contact pour obtenir un devis.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Les services proposés par ce biais sont des prestations de <strong>développement web</strong> incluant la création de <strong>sites internet</strong> et d’<strong>applications</strong>.
                    </p>
                </section>

                {/* SECTION 5 - Obligations des utilisateurs */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">5. Obligations des utilisateurs</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        En utilisant le Site, l’utilisateur s’engage à :
                    </p>
                    <ul className="text-gray-300 text-lg list-disc list-inside mt-4">
                        <li>Respecter les présentes CGU.</li>
                        <li>Ne pas porter atteinte à l’image de l’éditeur du site.</li>
                        <li>Ne pas porter atteinte au bon fonctionnement du site.</li>
                        <li>Respecter les lois et règlements en vigueur.</li>
                        <li>Ne pas utiliser le Site à des fins illégales ou frauduleuses.</li>
                    </ul>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Tout manquement à ces obligations peut entraîner des mesures restrictives, voire des poursuites judiciaires.
                    </p>
                </section>

                {/* SECTION 6 - Propriété intellectuelle */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">6. Propriété intellectuelle</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        L’ensemble des éléments du site (textes, images, logos, vidéos, etc.) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie du site, sans l’autorisation de l’éditeur, est strictement interdite.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        L’utilisateur s’engage à respecter les droits de propriété intellectuelle de l’éditeur et des tiers. Il est autorisé à consulter le site pour son usage personnel, mais n’est pas autorisé à en faire un usage commercial.
                    </p>
                </section>

                {/* SECTION 7 - Responsabilité et garanties */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">7. Responsabilité et garanties</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        L’éditeur met tout en œuvre pour fournir des informations et services de qualité, mais ne peut garantir l’exactitude, l’exhaustivité ou l’actualisation des contenus.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        L’utilisateur est seul responsable de l’usage qu’il fait du Site et des informations qu’il y trouve.
                    </p>
                </section>

                {/* SECTION 8 - Données personnelles et cookies */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">8. Données personnelles et cookies</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Le site en collecte aucune données personnelles dans le cadre de son fonctionnement.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. L’utilisateur peut configurer son navigateur pour bloquer les cookies s’il le souhaite.
                    </p>
                </section>

                {/* SECTION 9 - Modifications des CGU */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">9. Modifications des CGU</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        L’éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont invités à les consulter régulièrement pour se tenir informés des éventuelles évolutions.
                    </p>
                </section>

                {/* SECTION 10 - Droit applicable et juridiction compétente */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">10. Droit applicable et juridiction compétente</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Les présentes CGU sont régies par le droit français.
                        En cas de litige, et à défaut de résolution amiable, <strong>les tribunaux français seront seuls compétents.</strong>
                    </p>
                </section>

                {/* SECTION 11 - Contact */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">11. Contact</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Pour toute question concernant les présentes CGU, l’utilisateur peut contacter l’éditeur à l’adresse suivante :
                        <a href="mailto:fanatsy.dev@gmail.com" className="text-green-400 hover:underline"> fanatsy.dev@gmail.com</a>.
                    </p>
                </section>
            </main>
        </div>
    );
}