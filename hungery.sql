--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Customer" (
    "Etunimi" character varying NOT NULL,
    "Sukunimi" character varying NOT NULL,
    "PuhNro" character varying NOT NULL,
    "Osoite" character varying NOT NULL,
    "Kayttajatunnus" character varying NOT NULL
);


ALTER TABLE public."Customer" OWNER TO postgres;

--
-- Name: Menu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Menu" (
    "Nimi" character varying NOT NULL,
    "Kuvaus" character varying NOT NULL,
    "Tuotekategoria" character varying NOT NULL
);


ALTER TABLE public."Menu" OWNER TO postgres;

--
-- Name: OrderHistory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."OrderHistory" (
    "Ravintola" character varying,
    "Etunimi" character varying,
    "Sukunimi" character varying,
    "Tuote" character varying NOT NULL
);


ALTER TABLE public."OrderHistory" OWNER TO postgres;

--
-- Name: Restaurant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Restaurant" (
    "Nimi" character varying NOT NULL,
    "Osoite" character varying NOT NULL,
    "Hinnasto" double precision NOT NULL,
    "Tyyppi" character varying NOT NULL,
    "Aukioloajat" character varying NOT NULL,
    "Hintataso" character varying NOT NULL,
    "Kayttajatunnus" character varying NOT NULL,
    "Salasana" character varying NOT NULL
);


ALTER TABLE public."Restaurant" OWNER TO postgres;

--
-- Data for Name: Customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Customer" ("Etunimi", "Sukunimi", "PuhNro", "Osoite", "Kayttajatunnus") FROM stdin;
Kertti	Rantanen	0401234567	Rajarinne 8	KeRan
Irmeli	Kaunanen	0402345678	Kes„katu 67	IrKau
Rane	Tervonen	0403456789	T„htikatu 14	RaTer
Jare	Turmanen	0404567891	Liisankatu 73	JaTur
\.


--
-- Data for Name: Menu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Menu" ("Nimi", "Kuvaus", "Tuotekategoria") FROM stdin;
\.


--
-- Data for Name: OrderHistory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."OrderHistory" ("Ravintola", "Etunimi", "Sukunimi", "Tuote") FROM stdin;
\.


--
-- Data for Name: Restaurant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Restaurant" ("Nimi", "Osoite", "Hinnasto", "Tyyppi", "Aukioloajat", "Hintataso", "Kayttajatunnus", "Salasana") FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

