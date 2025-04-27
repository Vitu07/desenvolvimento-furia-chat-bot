class PlayerInfo:
    def __init__(self):
        self.jogadores_info = {
            "yuurih": {
                "nome_real": "Yuri Santos",
                "apelido": "yuurih",
                "posicao": "Rifler",
                "titulos": ["IEM New York 2020 NA", "ESL Pro League S12 NA"],
                "historia": "Na FURIA desde 2018, peça fundamental da lineup.",
            },
            "kscerato": {
                "nome_real": "Kaike Cerato",
                "apelido": "KSCERATO",
                "posicao": "Rifler",
                "titulos": ["IEM New York 2020 NA", "ESL Pro League S12 NA"],
                "historia": "Membro da FURIA desde 2018, conhecido pelos clutches impressionantes.",
            },
            "fallen": {
                "nome_real": "Gabriel Toledo",
                "apelido": "FalleN",
                "posicao": "AWPer",
                "titulos": ["2 Majors (Columbus 2016, Cologne 2016)", "Diversos títulos internacionais"],
                "historia": "Lenda do CS:GO, conhecido como 'Professor'.",
            },
            "molodoy": {
                "nome_real": "Kayke Bertolucci",
                "apelido": "molodoy",
                "posicao": "Second AWP",
                "titulos": ["Promessa em crescimento"],
                "historia": "Recém-chegado, grande promessa para o futuro.",
            },
            "yekindar": {
                "nome_real": "Mareks Gaļinskis",
                "apelido": "YEKINDAR",
                "posicao": "Stand-in (temporário)",
                "titulos": ["Diversos títulos com a Virtus.pro e Team Liquid"],
                "historia": "Stand-in da FURIA no momento.",
            },
            "sidde": {
                "nome_real": "Sidney de Paula",
                "apelido": "sidde",
                "posicao": "Coach",
                "titulos": ["Treinador atual da FURIA"],
                "historia": "Coach do time principal de CS2 da FURIA.",
            }
        }

    def encontrar_jogador(self, input_usuario):
        if not input_usuario:
            return None

        input_normalizado = input_usuario.lower().strip()

        # Mapeamento de sinônimos (deveria vir do synonyms.yml, mas podemos adicionar aqui temporariamente)
        sinonimos = {
        "yuri": "yuurih",
        "yurihh": "yuurih",
        "yuriii": "yuurih",
        "kcerato": "kscerato",
        "kayke": "molodoy",
        "professor": "fallen",
        "gabriel toledo": "fallen"
        }

        if input_normalizado in sinonimos:
            return sinonimos[input_normalizado]

        for chave in self.jogadores_info:
            if input_normalizado == chave.lower():
                return chave
            

        return None
