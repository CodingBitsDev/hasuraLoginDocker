CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    CONSTRAINT "Email" CHECK ((email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'::text))
);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_key UNIQUE (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);
