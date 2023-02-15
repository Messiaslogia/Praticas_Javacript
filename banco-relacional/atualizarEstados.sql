UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

SELECT est.nome FROM estados est WHERE sigla = "MA"

UPDATE estados
SET nome = 'PARANÁ'
    populacao = 11.32
WHERE sigla = 'PR'

SELECT est.nome FROM `estados` AS est WHERE sigla = "PR"
