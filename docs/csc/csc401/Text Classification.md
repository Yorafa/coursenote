# Text Classification

## Feature

feature: a measureable **variable** that is **distinctive** of something we want to model

If we wanna classify something, features are the good things we measure to make the classification.
- in neural network, features may not nameable, but they are still there.
- we need various, heterogeneous features to make a good model.
- Values for several features of an observation can be put into a single vector.
- features should be userful in discriminating between categories


### Example: Feature for diagnosing Alzheimer’s disease

Alzheimer’s disease involves atrophying of the brain. It has some features:
- excessive pauses (acoustic disfluencies)
- excessive word type repetitions
- simplistic or short sentences, functional words might be dropped

To diagnose Alzheimer’s disease, we can use these features to classify the patient. One might measure:
- proportion of utterance spent in silence
- entropy of the distribution of word types
- number of word tokens in the sentence
- number of prepositions and determiners in the sentence

### Example: Feature for Sentiment analysis

Sentiment analysis can involve detect:
- stress or frustration in a conversation
- interest, confusion or preferences

some useful features:
- trigrams
- first person pronouns

### Pre-processing

pre-processing involves preparing your data to make feature extraction easier or more valid.
- e.g. sometimes punctuation likes to press up against words, and we want to separate them.
- but there is no perfect pre-processing, it depends on the task.
  - noise reduction might removes some information
  - consistency is important, but not always possible

## Part of speech (PoS)

part-of-speech: lexical category or morphological class.
- linguists like to group words according their distribution in grammatical sentences.




content categories

function categories

## Tagging

tagging: the proceess of assigning a part-of-speech to each word in a sequence.

tagging as classification; we have a sequence of observation and decide the best assignment of hidden variable. (i.e. back can be noun, verb, ...)

