import * as React from "react"

const FormGold = () => {
    return (
        <>
            <h2 className="text-white text-center text-[2rem] font-['Nexa-Bold']">Formule <span className="text-gold">Gold</span></h2>
            <form method="POST" action="https://forms.reform.app/headless/lgi4rr/candidature-rr7-gold/wprk3g/submissions">
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="afb63047-8fb1-4526-a910-6b5d93cb2511">Prénom Nom</label>
                    <input className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        type="text"
                        id="afb63047-8fb1-4526-a910-6b5d93cb2511"
                        name="answers[afb63047-8fb1-4526-a910-6b5d93cb2511]"
                        placeholder="Jane Smith"
                        required
                    />
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="395713ca-316a-49ed-abf1-9bb470f76b52">Quelle est ton adresse mail ?</label>
                    <input className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        type="email"
                        id="395713ca-316a-49ed-abf1-9bb470f76b52"
                        name="answers[395713ca-316a-49ed-abf1-9bb470f76b52]"
                        placeholder="jane@example.com"
                        required
                    />
                </div>
                {/* It's not possible to use a phone-v2 block in a headless form */}
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="db002344-2f8e-41e8-8356-612abbd6f19c">Es-tu majeur ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="db002344-2f8e-41e8-8356-612abbd6f19c"
                        name="answers[db002344-2f8e-41e8-8356-612abbd6f19c]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="7098ddc7-5812-43e8-87f4-de8e9b28e687">Présentes-toi (passé/présent/futur) pour que nous en sachions un peu plus sur toi.</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="7098ddc7-5812-43e8-87f4-de8e9b28e687"
                        name="answers[7098ddc7-5812-43e8-87f4-de8e9b28e687]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="cc2fbab7-78e2-489e-837c-908ad4219b7c">Quelles sont tes attentes/objectifs sur le court/moyen/long terme ?</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="cc2fbab7-78e2-489e-837c-908ad4219b7c"
                        name="answers[cc2fbab7-78e2-489e-837c-908ad4219b7c]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="27257e18-eb59-4c2e-8379-7c3e89044308">Combien d'heures par semaine as-tu à consacrer à ton apprentissage ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="27257e18-eb59-4c2e-8379-7c3e89044308"
                        name="answers[27257e18-eb59-4c2e-8379-7c3e89044308]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="1h - 10h">1h - 10h</option>
                        <option value="10h - 20h">10h - 20h</option>
                        <option value="20h +">20h +</option>
                    </select>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="6589883a-6d3e-4f1c-9be1-f974df2f75c1">As-tu déjà suivi une formation ou acquis de l'expérience dans le trading ? Si oui, expliques brièvement.</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="6589883a-6d3e-4f1c-9be1-f974df2f75c1"
                        name="answers[6589883a-6d3e-4f1c-9be1-f974df2f75c1]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="256f1747-7079-4990-936c-724b60322b11">Quel est ton niveau en trading ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="256f1747-7079-4990-936c-724b60322b11"
                        name="answers[256f1747-7079-4990-936c-724b60322b11]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                    </select>
                </div>
                <fieldset className="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">Selon toi, qu'est-ce qui est essentiel pour être un bon trader ?</legend>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="fd1235ea-8d16-4719-a015-34538d23096a"
                            name="answers[eea4ba7b-e294-4f6a-9caf-079a54cd28e5][]"
                            value="Le taux de réussite"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="fd1235ea-8d16-4719-a015-34538d23096a">Le taux de réussite</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="07fec448-3a27-43b4-9cc4-adfaf4fde1db"
                            name="answers[eea4ba7b-e294-4f6a-9caf-079a54cd28e5][]"
                            value="La patience"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="07fec448-3a27-43b4-9cc4-adfaf4fde1db">La patience</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="0b6872b0-5087-4c0e-a85c-e9e13be43d75"
                            name="answers[eea4ba7b-e294-4f6a-9caf-079a54cd28e5][]"
                            value="La technique"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="0b6872b0-5087-4c0e-a85c-e9e13be43d75">La technique</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="6ea3cb00-b18a-43e9-ae39-858a0d737b46"
                            name="answers[eea4ba7b-e294-4f6a-9caf-079a54cd28e5][]"
                            value="La gestion de risque"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="6ea3cb00-b18a-43e9-ae39-858a0d737b46">La gestion de risque</label>
                    </div>
                </fieldset>
                <fieldset className="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">Combien es-tu prêt à investir pour atteindre la rentabilité en trading ?</legend>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="689bfe6f-2f9e-4131-a8c9-628984c61bff"
                            name="answers[bdffaf06-a904-44b4-b282-d4dcd697e18d]"
                            value="4 499€ - 7 499€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="689bfe6f-2f9e-4131-a8c9-628984c61bff">4 499€ - 7 499€</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="63f83f53-1cd2-4ce0-a2df-81851d9f984a"
                            name="answers[bdffaf06-a904-44b4-b282-d4dcd697e18d]"
                            value="7 499€ - 10 499€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="63f83f53-1cd2-4ce0-a2df-81851d9f984a">7 499€ - 10 499€</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="798a7501-e144-4334-832d-6d5c7919424c"
                            name="answers[bdffaf06-a904-44b4-b282-d4dcd697e18d]"
                            value="10 499€ +"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="798a7501-e144-4334-832d-6d5c7919424c">10 499€ +</label>
                    </div>
                </fieldset>
                <fieldset className="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">Quelle est ta source principale de revenus ?</legend>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="06b4a3f3-650a-41c1-88b3-35a07db0a531"
                            name="answers[d9e8eeb8-53eb-4a68-82ac-f5533fff97a2]"
                            value="Salaire"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="06b4a3f3-650a-41c1-88b3-35a07db0a531">Salaire</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="0fa85245-a73e-4cbc-bb5d-6e67b60e9a74"
                            name="answers[d9e8eeb8-53eb-4a68-82ac-f5533fff97a2]"
                            value="Entreprenariat"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="0fa85245-a73e-4cbc-bb5d-6e67b60e9a74">Entreprenariat</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="ba902764-fa6e-4e38-ba68-98711d9ba650"
                            name="answers[d9e8eeb8-53eb-4a68-82ac-f5533fff97a2]"
                            value="Revenu d'investissement"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="ba902764-fa6e-4e38-ba68-98711d9ba650">Revenu d'investissement</label>
                    </div>
                    <div class="mb-5">
                        <label className="block mb-2 text-sm font-medium text-white" for="d9e8eeb8-53eb-4a68-82ac-f5533fff97a2_other">Autre</label>
                        <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                            id="d9e8eeb8-53eb-4a68-82ac-f5533fff97a2_other"
                            name="answers[d9e8eeb8-53eb-4a68-82ac-f5533fff97a2]"
                            placeholder="Précise ton choix"
                        ></textarea>
                    </div>
                </fieldset>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="6cfde032-2f77-46a3-971a-aa7c3a1e7fd3">Comment as-tu connu RR7 ?</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="6cfde032-2f77-46a3-971a-aa7c3a1e7fd3"
                        name="answers[6cfde032-2f77-46a3-971a-aa7c3a1e7fd3]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="6d7a160e-ca19-44eb-ae19-8980e5069bd4">Etant donné que les places sont restreintes, qu'est-ce qui fait qu'aujourd'hui nous devons te sélectionner dans l'équipage RR7 ?</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="6d7a160e-ca19-44eb-ae19-8980e5069bd4"
                        name="answers[6d7a160e-ca19-44eb-ae19-8980e5069bd4]"
                        required
                    ></textarea>
                </div>
                <button class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormGold