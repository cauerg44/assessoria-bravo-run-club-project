-- ==========================================================
-- 1. INSERINDO USUÁRIOS (tb_user)
-- ==========================================================
INSERT INTO tb_user (name, email, password) VALUES ('Vitor Treinador', 'vitor@bravorun.com', '123456'); -- ID 1
INSERT INTO tb_user (name, email, password) VALUES ('Jennifer Admin', 'jennifer@bravorun.com', '123456'); -- ID 2
INSERT INTO tb_user (name, email, password) VALUES ('Thiago Socio', 'thiago@bravorun.com', '123456'); -- ID 3
INSERT INTO tb_user (name, email, password) VALUES ('Caue Atleta', 'caue@gmail.com', '123456');      -- ID 4
INSERT INTO tb_user (name, email, password) VALUES ('Maria Corrida', 'maria@gmail.com', '123456');     -- ID 5
INSERT INTO tb_user (name, email, password) VALUES ('Ricardo Silva', 'ricardo@gmail.com', '123456');   -- ID 6
INSERT INTO tb_user (name, email, password) VALUES ('Beatriz Souza', 'bia@hotmail.com', '123456');     -- ID 7
INSERT INTO tb_user (name, email, password) VALUES ('Marcos Oliveira', 'marcos@outlook.com', '123456');-- ID 8
INSERT INTO tb_user (name, email, password) VALUES ('Fernanda Lima', 'fer.lima@yahoo.com', '123456');  -- ID 9

-- ==========================================================
-- 2. INSERINDO PERFIS DE ATLETAS (tb_athlete)
-- ==========================================================
-- Atletas Ativos
INSERT INTO tb_athlete (user_id, phone, birth_date, status, medical_observations) VALUES (4, '71999999999', '2004-11-08', 'ACTIVE', 'Nenhuma restrição, foco em 5km');
INSERT INTO tb_athlete (user_id, phone, birth_date, status, medical_observations) VALUES (5, '71988888888', '1995-05-20', 'ACTIVE', 'Dores leves no joelho esquerdo');
INSERT INTO tb_athlete (user_id, phone, birth_date, status, medical_observations) VALUES (6, '71977777777', '1988-03-15', 'ACTIVE', 'Atleta de elite, preparando para maratona');
INSERT INTO tb_athlete (user_id, phone, birth_date, status, medical_observations) VALUES (8, '71955555555', '1982-11-25', 'ACTIVE', 'Hipertenso controlado, evitar treinos de tiro muito curtos');

-- Atletas Inativos
INSERT INTO tb_athlete (user_id, phone, birth_date, status, medical_observations) VALUES (7, '71966666666', '2000-07-10', 'INACTIVE', 'Solicitou pausa para focar nos estudos');
INSERT INTO tb_athlete (user_id, phone, birth_date, status, medical_observations) VALUES (9, '71944444444', '1993-01-30', 'INACTIVE', 'Inativação por falta de pagamento recorrente');

-- ==========================================================
-- 3. INSERINDO TREINOS SEMANAIS (tb_weekly_training)
-- ==========================================================
-- Treino Caue (ID 4)
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, completed) VALUES (4, '2026-04-12', '2026-04-18', 'Volume e Resistência', 'Segunda: 5km leve / Quarta: Tiros de 400m / Sexta: 7km moderado / Domingo: Longão 12km', true);

-- Treino Maria (ID 5)
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, completed) VALUES (5, '2026-04-12', '2026-04-18', 'Recuperação', 'Segunda: Caminhada 30min / Quarta: 3km leve / Sexta: Descanso', false);

-- Treino Ricardo (ID 6)
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, completed) VALUES (6, '2026-04-12', '2026-04-18', 'Pico de Volume', 'Seg: 10km / Ter: 15km / Qua: Intervalado / Qui: 10km / Sex: 20km / Dom: 32km', false);

-- Treino Marcos (ID 8)
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, completed) VALUES (8, '2026-04-12', '2026-04-18', 'Manutenção', 'Terça: 40min trote leve / Quinta: 5km plano / Sábado: 40min trote leve', true);

-- ==========================================================
-- 4. INSERINDO PAGAMENTOS (tb_payment)
-- ==========================================================
-- Pagamentos Caue (ID 4)
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, status, method) VALUES (4, 150.00, '2026-04-10', '2026-04-09', 'PAID', 'PIX');
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, status, method) VALUES (4, 150.00, '2026-05-10', NULL, 'PENDING', NULL);

-- Pagamentos Maria (ID 5)
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, status, method) VALUES (5, 150.00, '2026-04-05', NULL, 'OVERDUE', NULL);

-- Pagamentos Ricardo (ID 6)
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, status, method) VALUES (6, 150.00, '2026-04-10', '2026-04-08', 'PAID', 'PIX');

-- Pagamentos Fernanda (ID 9) - Cenário de Inadimplência
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, status, method) VALUES (9, 150.00, '2026-02-10', NULL, 'OVERDUE', NULL);
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, status, method) VALUES (9, 150.00, '2026-03-10', NULL, 'OVERDUE', NULL);