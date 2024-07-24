import * as React from "react"

const FormSilver = () => {
    return (
        <>
            <h2 className="text-white text-center text-[2rem] font-['Nexa-Bold']">Formule <span className="text-silver">Silver</span></h2>
            <form method="POST" action="https://forms.reform.app/headless/lgi4rr/candidature-rr7-silver/wprk3g/submissions">
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="3b5480ad-e2b3-49de-8b06-084fb73a2faa">Prénom Nom</label>
                    <input className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        type="text"
                        id="3b5480ad-e2b3-49de-8b06-084fb73a2faa"
                        name="answers[3b5480ad-e2b3-49de-8b06-084fb73a2faa]"
                        placeholder="Jane Smith"
                        required
                    />
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="32b6a315-a618-4089-924c-d4e04ec56a5f">Quelle est ton adresse mail ?</label>
                    <input className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        type="email"
                        id="32b6a315-a618-4089-924c-d4e04ec56a5f"
                        name="answers[32b6a315-a618-4089-924c-d4e04ec56a5f]"
                        placeholder="jane@example.com"
                        required
                    />
                </div>
                {/* It's not possible to use a phone-v2 block in a headless form */}
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="df45b7a5-2aee-4193-8a65-6b459e23c6b9">Es-tu majeur ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="df45b7a5-2aee-4193-8a65-6b459e23c6b9"
                        name="answers[df45b7a5-2aee-4193-8a65-6b459e23c6b9]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="4d0b7911-a32a-4f02-9d41-869ffd456228">Présentes-toi (passé/présent/futur) pour que nous en sachions un peu plus sur toi.</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="4d0b7911-a32a-4f02-9d41-869ffd456228"
                        name="answers[4d0b7911-a32a-4f02-9d41-869ffd456228]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="1325a073-4ed5-46d4-9d10-3666ba2f8f7f">Quelles sont tes attentes/objectifs sur le court/moyen/long terme ?</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="1325a073-4ed5-46d4-9d10-3666ba2f8f7f"
                        name="answers[1325a073-4ed5-46d4-9d10-3666ba2f8f7f]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="bb248bdd-8563-4429-a16b-ff8b2a77881e">Combien d'heures par semaine as-tu à consacrer à ton apprentissage ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="bb248bdd-8563-4429-a16b-ff8b2a77881e"
                        name="answers[bb248bdd-8563-4429-a16b-ff8b2a77881e]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="1h - 10h">1h - 10h</option>
                        <option value="10h - 20h">10h - 20h</option>
                        <option value="20h +">20h +</option>
                    </select>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="b4aa51b4-7bf7-489e-9f1a-6edcc498ac72">As-tu déjà suivi une formation ou acquis de l'expérience dans le trading ? Si oui, expliques brièvement.</label>
                    <textarea className="border text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-blue-500 focus:border-blue-500"
                        id="b4aa51b4-7bf7-489e-9f1a-6edcc498ac72"
                        name="answers[b4aa51b4-7bf7-489e-9f1a-6edcc498ac72]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="35e299f5-97b7-476c-a2a5-4e18d5294c3c">Quel est ton niveau en trading ?</label>
                    <select className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="35e299f5-97b7-476c-a2a5-4e18d5294c3c"
                        name="answers[35e299f5-97b7-476c-a2a5-4e18d5294c3c]"
                        required
                    >
                        <option value="">Choisis une option</option>
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                    </select>
                </div>
                <fieldset class="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">Selon toi, qu'est-ce qui est essentiel pour être un bon trader ?</legend>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="fd1235ea-8d16-4719-a015-34538d23096a"
                            name="answers[e29c50c8-4232-4c6c-8b3a-d1b49f84e06e][]"
                            value="Le taux de réussite"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="fd1235ea-8d16-4719-a015-34538d23096a">Le taux de réussite</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="07fec448-3a27-43b4-9cc4-adfaf4fde1db"
                            name="answers[e29c50c8-4232-4c6c-8b3a-d1b49f84e06e][]"
                            value="La patience"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="07fec448-3a27-43b4-9cc4-adfaf4fde1db">La patience</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="0b6872b0-5087-4c0e-a85c-e9e13be43d75"
                            name="answers[e29c50c8-4232-4c6c-8b3a-d1b49f84e06e][]"
                            value="La technique"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="0b6872b0-5087-4c0e-a85c-e9e13be43d75">La technique</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                            type="checkbox"
                            id="6ea3cb00-b18a-43e9-ae39-858a0d737b46"
                            name="answers[e29c50c8-4232-4c6c-8b3a-d1b49f84e06e][]"
                            value="La gestion de risque"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-300" for="6ea3cb00-b18a-43e9-ae39-858a0d737b46">La gestion de risque</label>
                    </div>
                </fieldset>
                <fieldset class="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">A combien estimes-tu ton budget annuel pour te développer dans le trading ?</legend>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="b1378832-e99f-44eb-9b19-3a3f34ce7952"
                            name="answers[bfdf33d7-2d2b-42e9-8b55-8d5e13eb6356]"
                            value="1 999€ - 3 999€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="b1378832-e99f-44eb-9b19-3a3f34ce7952">1 999€ - 3 999€</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="05c171d9-e321-4300-8811-aa24fb34d398"
                            name="answers[bfdf33d7-2d2b-42e9-8b55-8d5e13eb6356]"
                            value="3 999€ - 5 999€"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="05c171d9-e321-4300-8811-aa24fb34d398">3 999€ - 5 999€</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="a363f5cf-a74b-4fe7-9817-aa266ee887ba"
                            name="answers[bfdf33d7-2d2b-42e9-8b55-8d5e13eb6356]"
                            value="5 999€ +"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="a363f5cf-a74b-4fe7-9817-aa266ee887ba">5 999€ +</label>
                    </div>
                </fieldset>
                <fieldset class="mb-5">
                    <legend className="mb-2 text-sm font-medium text-white">Quelle est ta source principale de revenus</legend>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="56f3c232-404d-42b4-922a-fe71ba58f7a6"
                            name="answers[335defae-b694-42b8-a222-1b472df5eda0]"
                            value="Salaire"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="56f3c232-404d-42b4-922a-fe71ba58f7a6">Salaire</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="6829077a-a0aa-465e-bbd2-07a1715bf0ff"
                            name="answers[335defae-b694-42b8-a222-1b472df5eda0]"
                            value="Entreprenariat"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="6829077a-a0aa-465e-bbd2-07a1715bf0ff">Entreprenariat</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input className="w-4 h-4 focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 bg-gray-700 border-gray-600"
                            type="radio"
                            id="6fe695fc-13a2-4509-b969-864314db1cf0"
                            name="answers[335defae-b694-42b8-a222-1b472df5eda0]"
                            value="Revenu d'investissement"
                            required
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-300" for="6fe695fc-13a2-4509-b969-864314db1cf0">Revenu d'investissement</label>
                    </div>
                    <div class="mb-5">
                        <label className="block mb-2 text-sm font-medium text-white" for="335defae-b694-42b8-a222-1b472df5eda0_other">Autres</label>
                        <textarea className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            id="335defae-b694-42b8-a222-1b472df5eda0_other"
                            name="answers[335defae-b694-42b8-a222-1b472df5eda0]"
                            placeholder="Précise ton choix"
                        ></textarea>
                    </div>
                </fieldset>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="1db84259-2cd3-4212-b4f5-6d51eceb0056">Comment as-tu connu RR7 ?</label>
                    <textarea className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="1db84259-2cd3-4212-b4f5-6d51eceb0056"
                        name="answers[1db84259-2cd3-4212-b4f5-6d51eceb0056]"
                        required
                    ></textarea>
                </div>
                <div class="mb-5">
                    <label className="block mb-2 text-sm font-medium text-white" for="69e3bf24-9ce8-4151-bee2-c019177bbb3d">Etant donné que les places sont restreintes, qu'est-ce qui fait qu'aujourd'hui nous devons te sélectionner dans l'équipage RR7 ?</label>
                    <textarea className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        id="69e3bf24-9ce8-4151-bee2-c019177bbb3d"
                        name="answers[69e3bf24-9ce8-4151-bee2-c019177bbb3d]"
                        required
                    ></textarea>
                </div>
                <button type="submit" class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}

export default FormSilver