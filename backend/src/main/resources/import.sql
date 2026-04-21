-- ==========================================================
-- 1. TB_USER (Dados de login e biográficos)
-- ==========================================================
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Vitor Treinador', 'vitor@bravorun.com', '123456', 'M', '1985-03-10');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Jennifer Admin', 'jennifer@bravorun.com', '123456', 'F', '1990-06-15');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Thiago Socio', 'thiago@bravorun.com', '123456', 'M', '1988-01-20');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Caue Atleta', 'caue@gmail.com', '123456', 'M', '2004-11-08');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Maria Corrida', 'maria@gmail.com', '123456', 'F', '1995-05-20');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Ricardo Silva', 'ricardo@gmail.com', '123456', 'M', '1988-03-15');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Beatriz Souza', 'bia@hotmail.com', '123456', 'F', '2000-07-10');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Marcos Oliveira', 'marcos@outlook.com', '123456', 'M', '1982-11-25');
INSERT INTO tb_user (name, email, password, gender, birth_date) VALUES ('Fernanda Lima', 'fer.lima@yahoo.com', '123456', 'F', '1993-01-30');

-- ==========================================================
-- 2. TB_ATHLETE (Perfis vinculados aos usuários)
-- ==========================================================
-- ==========================================================
-- 2. TB_ATHLETE (Perfis vinculados aos usuários com a nova coluna GOAL)
-- ==========================================================
INSERT INTO tb_athlete (user_id, phone, athlete_status, medical_observations, goal) VALUES (4, '71999999999', 'ACTIVE', 'Nenhuma restrição', 'Melhorar tempo nos 5km');
INSERT INTO tb_athlete (user_id, phone, athlete_status, medical_observations, goal) VALUES (5, '71988888888', 'ACTIVE', 'Dores leves no joelho esquerdo', 'Completar primeira prova de 10km');
INSERT INTO tb_athlete (user_id, phone, athlete_status, medical_observations, goal) VALUES (6, '71977777777', 'ACTIVE', 'Atleta de elite', 'Sub 3h na Maratona');
INSERT INTO tb_athlete (user_id, phone, athlete_status, medical_observations, goal) VALUES (7, '71966666666', 'INACTIVE', 'Solicitou pausa para estudos', 'Manutenção de saúde');
INSERT INTO tb_athlete (user_id, phone, athlete_status, medical_observations, goal) VALUES (8, '71955555555', 'ACTIVE', 'Hipertenso controlado', 'Perda de peso e 5km');
INSERT INTO tb_athlete (user_id, phone, athlete_status, medical_observations, goal) VALUES (9, '71944444444', 'INACTIVE', 'Inativação por falta de pagamento', 'Retorno aos 10km');
-- ==========================================================
-- 3. TB_WEEKLY_TRAINING (Planilhas semanais)
-- ==========================================================
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, training_type, completed) VALUES (4, '2026-04-12', '2026-04-18', 'Volume', 'Segunda: 5km / Quarta: Tiros / Sexta: 7km / Domingo: 12km', 'INTERVALS', true);
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, training_type, completed) VALUES (5, '2026-04-12', '2026-04-18', 'Recuperação', 'Segunda: Caminhada / Quarta: 3km leve / Sexta: Descanso', 'RECOVERY', false);
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, training_type, completed) VALUES (6, '2026-04-12', '2026-04-18', 'Pico', 'Seg: 10km / Ter: 15km / Qua: Intervalado / Dom: 32km', 'LONG_RUN', false);
INSERT INTO tb_weekly_training (athlete_id, start_date, end_date, goal, description, training_type, completed) VALUES (8, '2026-04-12', '2026-04-18', 'Manutenção', 'Terça: 40min trote / Quinta: 5km plano / Sábado: 40min trote', 'EASY_RUN', true);

-- ==========================================================
-- 4. TB_PAYMENT (Histórico Financeiro)
-- ==========================================================
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, payment_status, payment_method) VALUES (4, 150.00, '2026-04-10', '2026-04-09', 'PAID', 'PIX');
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, payment_status, payment_method) VALUES (4, 150.00, '2026-05-10', NULL, 'PENDING', NULL);
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, payment_status, payment_method) VALUES (5, 150.00, '2026-04-05', NULL, 'OVERDUE', NULL);
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, payment_status, payment_method) VALUES (6, 150.00, '2026-04-10', '2026-04-08', 'PAID', 'PIX');
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, payment_status, payment_method) VALUES (9, 150.00, '2026-02-10', NULL, 'OVERDUE', NULL);
INSERT INTO tb_payment (athlete_id, amount, due_date, payment_date, payment_status, payment_method) VALUES (9, 150.00, '2026-03-10', NULL, 'OVERDUE', NULL);