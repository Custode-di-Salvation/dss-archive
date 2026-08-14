import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fop = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/fop' }),
  schema: z.object({
    codice_univoco: z.string(),
    titolo: z.string(),
    data_apertura: z.string(),
    data_riapertura: z.string().optional().nullable(),
    ultimo_aggiornamento: z.string(),
    stato: z.enum(['Aperto', 'Chiuso', 'Cold', 'Archiviato']),
    paranaturale: z.boolean().default(false),
    classificazione_evento: z.string().optional(),
    agenti_coinvolti: z.array(z.string()).default([]),
    personaggi_coinvolti: z.array(z.string()).default([]),
    luoghi_chiave: z.array(z.string()).default([]),
    entita_collegate: z.array(z.string()).default([]),
    fop_collegati: z.array(z.string()).default([]),
    azioni_in_corso: z.array(z.string()).default([]),
    eyes_only: z.string().optional(),
  }),
});

const fopUpdates = defineCollection({
  loader: glob({ pattern: '**/updates/*.md', base: './src/content/fop' }),
  schema: z.object({
    data: z.string(),
    titolo: z.string(),
    responsabile: z.string(),
    versione_fascicolo: z.string().optional(),
  }),
});

const scp = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/scp' }),
  schema: z.object({
    codice_univoco: z.string(),
    denominazione: z.string(),
    categoria: z.enum(['RE-ALT', 'LOP', 'OOP', 'EP', 'PU']),
    data_apertura: z.string(),
    ultimo_aggiornamento: z.string(),
    stato: z.string().optional(),
    localizzazione: z.string().optional(),
    tipologia: z.string().optional(),
    idr: z.number().optional().nullable(),
    livello_minaccia: z.string(),
    agenti_coinvolti: z.array(z.string()).default([]),
    fop_collegati: z.array(z.string()).default([]),
    entita_collegate: z.array(z.string()).default([]),
    azioni_in_corso: z.array(z.string()).default([]),
  }),
});

const scpUpdates = defineCollection({
  loader: glob({ pattern: '**/updates/*.md', base: './src/content/scp' }),
  schema: z.object({
    data: z.string(),
    titolo: z.string(),
    responsabile: z.string(),
    versione_fascicolo: z.string().optional(),
  }),
});

const registro = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/registro' }),
  schema: z.object({
    codice_rp: z.string(),
    nome_completo: z.string(),
    classificazione: z.string(),
    tier: z.enum(['Tier 1', 'Tier 2', 'Tier 3']),
    stato: z.enum(['Compliant', 'Absconder', 'Deceduto', 'Incarcerato', 'Irreperibile']),
    indirizzo: z.string(),
    precedenti_penali: z.boolean().default(false)
  }),
});

const manuale = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/manuale' }),
  schema: z.object({
    titolo: z.string(),
    categoria: z.string(),
    ordine: z.number(),
    aggiornato_il: z.string().optional()
  }),
});

export const collections = { fop, fopUpdates, scp, scpUpdates, registro, manuale };
