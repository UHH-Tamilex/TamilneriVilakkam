const gramAbbreviations = [
    ['abl.','ablative'],
    ['abs.','absolutive'],
    ['acc.','accusative'],
    ['adj.','adjective'],
    ['adv.','adverb'],
    ['aux.','auxiliary'],
    ['caus.','causative'],
    ['conc.','concessive'],
    ['cond.','conditional'],
    ['conj.','conjunction'],
    ['comp.','comparative'],
    ['dat.','dative'],
    ['dem.pron.','demonstrative pronoun'],
    ['den.','denominative'],
    ['f.','feminine'],
    ['f.sg.','feminine singular'],
    ['f.pl.','feminine plural'],
    ['f.v.','finite verb'],
    ['gen.','genitive'],
    ['ger.','gerundive'],
    ['h.','honorific'],
    ['indef.','indefinite'],
    ['1.','first person'],
    ['2.','second person'],
    ['3.','third person'],
    ['hab.fut.','habitual future'],
    ['i.a.','imperfect aspect'],
    ['id.','ideophone'],
    ['incl.','inclusive'],
    ['inf.','infinitive'],
    ['inst.','instrumental'],
    ['inter.pron.','interrogative pronoun'],
    ['ipt.','imperative'],
    ['loc.','locative'],
    ['m.','masculine'],
    ['m.l.','metrical lengthening'],
    ['m.sg.','masculine singular'],
    ['m.pl.','masculine plural'],
    ['muṟ.','muṟṟeccam'],
    ['n.','noun'],
    ['n.sg.','neuter singular'],
    ['n.pl.','neuter plural'],
    ['neg.','negative'],
    ['obl.','oblique'],
    ['opt.','optative'],
    ['p.a.','perfective aspect'],
    ['p.n.','proper name'],
    ['part.n.','participial noun'],
    ['pey.','peyareccam'],
    ['pers.pron.','personal pronoun'],
    ['pres.','present tense'],
    ['pron.','pronoun'],
    ['pl.','plural'],
    ['post.','postposition'],
    ['san.','sandhi'],
    ['sub.','subjunctive'],
    ['pron.n.','pronominalised noun'],
    ['r.n.','root noun'],
    ['rel.','relative'],
    ['sg.','singular'],
    ['soc.','sociative'],
    ['sub.','subjuntive'],
    ['suff.','suffix'],
    ['v.n.','verbal noun'],
    ['v.r.','verbal root'],
    ['v.r.adj.','verbal root as adjective'],
    ['v.r.ger.','verbal root as gerundive'],
    ['v.r.ipt.','verbal root as imperative'],
    ['v.r.inf.','verbal root as infinitive'],
    ['v.r.pey.','verbal root as peyareccam'],
    ['v.r.pey.p.a.','verbal root as peyareccam perfective aspect'],
    ['v.r.pey.i.a.','verbal root as peyareccam imperfective aspect'],
    ['voc.','vocative']
];

gramAbbreviations.sort((a,b) => b[0].length - a[0].length);
const gramMap = new Map(gramAbbreviations.map(arr => [arr[1],arr[0]]));

export {gramAbbreviations, gramMap};
