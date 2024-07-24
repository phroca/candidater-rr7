import * as React from "react"

const FormBronze = () => {
    return (
        <>
            <h2 className="text-white text-center text-[2rem] font-['Nexa-Bold']">Formule <span className="text-bronze">Bronze</span></h2>
            <form method="POST" action="https://forms.reform.app/headless/lgi4rr/candidature-rr7-bronze/wprk3g/submissions">
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="9fb6f354-f8d8-41d5-adc4-0bea2c8dc732" >Prénom Nom</label>
                    <input className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        type="text"
                        id="9fb6f354-f8d8-41d5-adc4-0bea2c8dc732"
                        name="answers[9fb6f354-f8d8-41d5-adc4-0bea2c8dc732]"
                        placeholder="Jane Smith"
                        required
                    />
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="90395ab3-45cf-4b09-b097-e9d68843b9e9" >Quelle est ton adresse mail ?</label>
                    <input className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        type="email"
                        id="90395ab3-45cf-4b09-b097-e9d68843b9e9"
                        name="answers[90395ab3-45cf-4b09-b097-e9d68843b9e9]"
                        placeholder="jane@example.com"
                        required
                    />
                </div>
                {/* It's not possible to use a phone-v2 block in a headless form */}
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="bd3c02c7-33ec-4dfb-a9cf-b1a394279e60">Es-tu majeur ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="bd3c02c7-33ec-4dfb-a9cf-b1a394279e60"
                        name="answers[bd3c02c7-33ec-4dfb-a9cf-b1a394279e60]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="b7227435-bb98-4e00-9b28-27209e58560d">Présentes-toi (passé/présent/futur) pour que nous en sachions un peu plus sur toi.</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="b7227435-bb98-4e00-9b28-27209e58560d"
                        name="answers[b7227435-bb98-4e00-9b28-27209e58560d]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="0f0606d6-f485-4855-b084-a3b1cedb7718">Quelles sont tes attentes/objectifs sur le court/moyen/long terme ?</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="0f0606d6-f485-4855-b084-a3b1cedb7718"
                        name="answers[0f0606d6-f485-4855-b084-a3b1cedb7718]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="0b5963cb-27d4-4054-b6e8-9e272fcb4ea2">Combien d'heures par semaine as-tu à consacrer à ton apprentissage ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="0b5963cb-27d4-4054-b6e8-9e272fcb4ea2"
                        name="answers[0b5963cb-27d4-4054-b6e8-9e272fcb4ea2]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="1h - 10h">1h - 10h</option>
                        <option value="10h - 20h">10h - 20h</option>
                        <option value="20h +">20h +</option>
                    </select>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="cec4249b-c1e8-4007-a5a9-74dbd6ebaa0b">As-tu déjà suivi une formation ou acquis de l'expérience dans le trading ? Si oui, expliques brièvement.</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="cec4249b-c1e8-4007-a5a9-74dbd6ebaa0b"
                        name="answers[cec4249b-c1e8-4007-a5a9-74dbd6ebaa0b]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="40ea0a9b-c0e9-4598-bdb9-412953c13f76">Quel est ton niveau en trading ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="40ea0a9b-c0e9-4598-bdb9-412953c13f76"
                        name="answers[40ea0a9b-c0e9-4598-bdb9-412953c13f76]"
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
                            name="answers[c6371c67-f1d2-4fb3-bb78-a1336c969cb0][]"
                            value="Le taux de réussite"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="fd1235ea-8d16-4719-a015-34538d23096a">Le taux de réussite</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="07fec448-3a27-43b4-9cc4-adfaf4fde1db"
                            name="answers[c6371c67-f1d2-4fb3-bb78-a1336c969cb0][]"
                            value="La patience"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="07fec448-3a27-43b4-9cc4-adfaf4fde1db">La patience</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="0b6872b0-5087-4c0e-a85c-e9e13be43d75"
                            name="answers[c6371c67-f1d2-4fb3-bb78-a1336c969cb0][]"
                            value="La technique"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="0b6872b0-5087-4c0e-a85c-e9e13be43d75">La technique</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="6ea3cb00-b18a-43e9-ae39-858a0d737b46"
                            name="answers[c6371c67-f1d2-4fb3-bb78-a1336c969cb0][]"
                            value="La gestion de risque"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="6ea3cb00-b18a-43e9-ae39-858a0d737b46">La gestion de risque</label>
                    </div>
                </fieldset>
                <fieldset class="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">A combien estimes-tu ton budget annuel pour te développer dans le trading ?</legend>
                    <div className="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="9bfbf869-3d55-4d51-8f37-b98d15fc55c3"
                            name="answers[d427a6e6-b3a3-4341-b309-f7a0accfd087]"
                            value="0€ - 999€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="9bfbf869-3d55-4d51-8f37-b98d15fc55c3">0€ - 999€</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="150347a9-2522-4d04-bba3-b7c58c1e7efe"
                            name="answers[d427a6e6-b3a3-4341-b309-f7a0accfd087]"
                            value="999€ - 2 499€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="150347a9-2522-4d04-bba3-b7c58c1e7efe">999€ - 2 499€</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="7f7ef21b-6768-44bd-8eb6-f1d3c7d874cf"
                            name="answers[d427a6e6-b3a3-4341-b309-f7a0accfd087]"
                            value="2 499€ - 3 999€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="7f7ef21b-6768-44bd-8eb6-f1d3c7d874cf">2 499€ - 3 999€</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="a9b84ecc-695f-462a-8cb9-bd21cefffcc4"
                            name="answers[d427a6e6-b3a3-4341-b309-f7a0accfd087]"
                            value="3 999€ - 4 999€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="a9b84ecc-695f-462a-8cb9-bd21cefffcc4">3 999€ - 4 999€</label>
                    </div>
                </fieldset>
                <fieldset class="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">Quelle est ta source principale de revenus</legend>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="2ed4a05b-813d-4fdc-bd1b-9c7992d8ef38"
                            name="answers[b0778232-d58b-4b70-b364-4c4005ba304a]"
                            value="Salaire"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="2ed4a05b-813d-4fdc-bd1b-9c7992d8ef38">Salaire</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="d5610842-c54d-49d3-8bef-caae267d75bb"
                            name="answers[b0778232-d58b-4b70-b364-4c4005ba304a]"
                            value="Entreprenariat"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="d5610842-c54d-49d3-8bef-caae267d75bb">Entreprenariat</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="efa7ce9a-b74f-4d4e-b776-5f2bf9d603f3"
                            name="answers[b0778232-d58b-4b70-b364-4c4005ba304a]"
                            value="Revenu d'investissement"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="efa7ce9a-b74f-4d4e-b776-5f2bf9d603f3">Revenu d'investissement</label>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white" for="b0778232-d58b-4b70-b364-4c4005ba304a_other">Autres</label>
                        <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                            id="b0778232-d58b-4b70-b364-4c4005ba304a_other"
                            name="answers[b0778232-d58b-4b70-b364-4c4005ba304a]"
                            placeholder="Précise ton choix"
                        ></textarea>
                    </div>
                </fieldset>
                <div>
                    <label className="block mb-2 text-sm font-medium text-white" for="60c7fa60-835f-4a44-b9f8-3cc28b555ffb">Comment as-tu connu RR7 ?</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="60c7fa60-835f-4a44-b9f8-3cc28b555ffb"
                        name="answers[60c7fa60-835f-4a44-b9f8-3cc28b555ffb]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="716787d1-e850-4c7b-b85c-8501990931d2">Etant donné que les places sont restreintes, qu'est-ce qui fait qu'aujourd'hui nous devons te sélectionner dans l'équipage RR7 ?</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="716787d1-e850-4c7b-b85c-8501990931d2"
                        name="answers[716787d1-e850-4c7b-b85c-8501990931d2]"
                        required
                    ></textarea>
                </div>
                <button type="submit" class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}

export default FormBronze;