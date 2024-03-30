# Transformer

based on attention is all you need

## Attention

attention(Q,K,V): Q:query; K: key; V: value
- Attention(Q,K,V) = softmax(QK.T/sqrt(dK))V
- dK stand for dimension of matrix K

## Encode
1. Residual connection
    - some problems here! NN struglle to learn the identity function mapping
    - solution: add back the input embeddings to the sub-layer's output moving up 
2. Layer Normalization
    - what we do: Normlaize input layer's distribution to 0 mean and 1 standard deviation
    - why we should do? Removes uninformative variation in layer's features
	- some problems here! we call this post-LN, some times we need warm up with learn rate.
	- alternative: pre-LN: puts layer-norm within the residual block. Allows removing warm-up stage. More stable training initialization.
3. Transformer Encoder - Self Attention, steps:
    1. calculate the quer, key and value for each toekn
	2. calculate the attention score between query and keys
	3. normalize the attention scoress by applying softmax
	4. calculate values by taking a weighted sum
    - we also have Multi-head self Attention (MHA)

feed-forward(FFN) layers:
    - why we need? Attention only re-weight the value vectors, we need to apply non-linearities (activations_ to enable (deep) learning
    - FFn provide non-linear activation to attention layer outputs (what we want)

position encoding:
- why we need? attention

## Decode

Masked self-attention:
- enforce auto-regressive language modeling objective. the decoder cannot peek and pay attention to the unknown future words
- solution: use a look-head mask M, by setting attention


## tansformer based language model

BERT; bidirectional Encoder Representations from Transformers
- impressive performance, performance better than human and SOTA peers
- encoder-only architecturue, lead some problem like:

BART; adds the decoder back to BerT and keepign the BERT objective

NMT

T5: Text-to-Text Transfer Transformer

GPT: generative Pretrained Transformer
- GPT3: very alrge models (175B parameters)
- prompt does matter
