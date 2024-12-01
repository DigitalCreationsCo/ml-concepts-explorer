/* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  Network, 
  ChartNetwork,
  GitBranch, 
  Sparkles, 
  Layers,
  Brain,
  Target,
  Binary,
  ThumbsUp,
  Cpu,
  Shuffle,
  Cog,
} from 'lucide-react';
import { MLConcepts } from './types';

export const mlConcepts: MLConcepts = {
    rnn: {
      shortTitle: "RNN",
      title: "Recurrent Neural Networks (RNN)",
      icon: <Network className="w-4 h-4" />,
      description: (
        <div className="space-y-4">
          <p>
            Recurrent Neural Networks (RNNs) are a class of neural networks specifically designed to work with sequential data by maintaining an internal state (memory). Unlike traditional neural networks, RNNs can use their internal state to process sequences of inputs, making them ideal for tasks like natural language processing, time series prediction, and speech recognition.
          </p>
          <p>
            The key innovation of RNNs is their ability to maintain a hidden state that gets updated with each input in the sequence, allowing them to capture temporal dependencies and patterns in the data.
          </p>
        </div>
      ),
      components: (
        <div className="space-y-4">
          <ul className="list-disc pl-6">
            <li><strong>Input Layer:</strong> Receives one element of the sequence at each time step</li>
            <li><strong>Hidden State:</strong> Internal memory that gets updated with each input</li>
            <li><strong>Output Layer:</strong> Produces predictions based on the current hidden state</li>
            <li><strong>Recurrent Connections:</strong> Connections that feed the hidden state back into the network</li>
          </ul>
        </div>
      ),
      applications: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Language Modeling and Text Generation</li>
          <li>Machine Translation</li>
          <li>Speech Recognition</li>
          <li>Time Series Prediction</li>
          <li>Music Generation</li>
        </ul>
      ),
      animation: ({step, setStep}) => (
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="flex items-center justify-center space-x-4">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                  ${i <= step ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setStep((prev) => (prev + 1) % 3)}
            >
              Next Step
            </button>
          </div>
          <div className="mt-4 text-center">
            {step === 0 && "Input processing"}
            {step === 1 && "Hidden state update"}
            {step === 2 && "Output generation"}
          </div>
        </div>
      )
    },
    lstm: {
      shortTitle: "LSTM",
      title: "Long Short-Term Memory (LSTM)",
      icon: <ChartNetwork className="w-4 h-4" />,
      description: "LSTMs extend RNNs with sophisticated gating mechanisms to better handle long-term dependencies.", 
      components: (
          <div className="space-y-4">
              <ul className="list-disc pl-6">
                  <li><strong>Input Gate:</strong> Controls what new information is stored in the cell state</li>
                  <li><strong>Forget Gate:</strong> Determines what information to discard from the cell state</li>
                  <li><strong>Output Gate:</strong> Controls what parts of the cell state are output</li>
                  <li><strong>Cell State:</strong> Long-term memory storage mechanism</li>
                  <li><strong>Hidden State:</strong> Short-term memory/output at each time step</li>
                  <li><strong>Peephole Connections:</strong> Optional connections from cell state to gates</li>
              </ul>
          </div>
      ),
      applications: (
          <ul className="list-disc pl-6 space-y-2">
              <li>Time Series Prediction</li>
              <li>Natural Language Processing</li>
              <li>Speech Recognition</li>
              <li>Machine Translation</li>
              <li>Sentiment Analysis</li>
              <li>Music Generation</li>
              <li>Anomaly Detection in Sequential Data</li>
          </ul>
      ),
      animation: ({step, setStep}) => (
          <div className="p-4 bg-slate-100 rounded-lg">
              <div className="flex justify-center space-x-4 mb-4">
                  {['input', 'forget', 'output'].map((gate, index) => (
                      <button
                          key={gate}
                          className={`px-4 py-2 rounded ${
                              step === index ? 'bg-purple-500 text-white' : 'bg-gray-200'
                          }`}
                          onClick={() => setStep(index)}
                      >
                          {gate.charAt(0).toUpperCase() + gate.slice(1)} Gate
                      </button>
                  ))}
              </div>
              <div className="h-40 flex items-center justify-center border-2 border-purple-200 rounded">
                  <div className={`transition-all duration-500 ${
                      step === 0 ? 'scale-100' : 'scale-0'
                  }`}>
                      Input Gate: Controls new information flow
                  </div>
                  <div className={`transition-all duration-500 ${
                      step === 1 ? 'scale-100' : 'scale-0'
                  }`}>
                      Forget Gate: Removes irrelevant information
                  </div>
                  <div className={`transition-all duration-500 ${
                      step === 2 ? 'scale-100' : 'scale-0'
                  }`}>
                      Output Gate: Controls information output
                  </div>
              </div>
          </div>
      )
  },
    transformers: {
      shortTitle: "Transformers",
      title: "Transformer Architecture",
      icon: <GitBranch className="w-4 h-4" />,
      description: (
        <div className="space-y-4">
          <p>
            Transformers are a revolutionary neural network architecture that has become the backbone of modern natural language processing. Unlike RNNs, Transformers process entire sequences in parallel using self-attention mechanisms, leading to better performance and more efficient training.
          </p>
          <p>
            The key innovation of Transformers is the self-attention mechanism, which allows the model to weigh the importance of different parts of the input sequence when processing each element, enabling better handling of long-range dependencies.
          </p>
        </div>
      ),
      components: (
        <div className="space-y-4">
          <ul className="list-disc pl-6">
            <li><strong>Self-Attention:</strong> Mechanism to weigh the importance of different parts of the input</li>
            <li><strong>Multi-Head Attention:</strong> Multiple parallel attention mechanisms</li>
            <li><strong>Position Encodings:</strong> Information about token position in sequence</li>
            <li><strong>Feed-Forward Networks:</strong> Process attention outputs</li>
            <li><strong>Layer Normalization:</strong> Stabilizes training</li>
          </ul>
        </div>
      ),
      applications: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Large Language Models (GPT, BERT)</li>
          <li>Machine Translation</li>
          <li>Document Summarization</li>
          <li>Question Answering</li>
          <li>Code Generation</li>
        </ul>
      ),
      animation: ({step, setStep}) => (
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setStep((prev) => (prev + 1) % 3)}
            >
              Next Step
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded transition-all duration-500 ${
              step >= 0 ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              Self-Attention
            </div>
            <div className={`p-4 rounded transition-all duration-500 ${
              step >= 1 ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              Feed Forward
            </div>
            <div className={`p-4 rounded transition-all duration-500 ${
              step >= 2 ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              Layer Norm
            </div>
          </div>
        </div>
      )
    },
    cnn: {
      shortTitle: "CNN",
      title: "Convolutional Neural Networks",
      icon: <Layers className="w-4 h-4" />,
      description: (
        <div className="space-y-4">
          <p>
            Convolutional Neural Networks (CNNs) are specialized neural networks designed primarily for processing grid-like data, such as images. They use convolution operations to automatically learn hierarchical patterns and features from the input data.
          </p>
          <p>
            CNNs have revolutionized computer vision by learning to detect edges, shapes, textures, and increasingly complex patterns through their hierarchical layer structure.
          </p>
        </div>
      ),
      components: (
        <div className="space-y-4">
          <ul className="list-disc pl-6">
            <li><strong>Convolutional Layers:</strong> Apply filters to detect features</li>
            <li><strong>Pooling Layers:</strong> Reduce spatial dimensions and capture invariances</li>
            <li><strong>Activation Functions:</strong> Introduce non-linearity (ReLU, etc.)</li>
            <li><strong>Fully Connected Layers:</strong> Final classification/regression layers</li>
          </ul>
        </div>
      ),
      applications: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Image Classification</li>
          <li>Object Detection</li>
          <li>Face Recognition</li>
          <li>Medical Image Analysis</li>
          <li>Self-Driving Cars</li>
        </ul>
      ),
      animation: ({step, setStep}) => (
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setStep((prev) => (prev + 1) % 4)}
            >
              Next Layer
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className={`p-4 rounded transition-all duration-500 ${
              step >= 0 ? 'bg-blue-100 scale-105' : 'bg-gray-100'
            }`}>
              Convolution
            </div>
            <div className={`p-4 rounded transition-all duration-500 ${
              step >= 1 ? 'bg-blue-100 scale-105' : 'bg-gray-100'
            }`}>
              Pooling
            </div>
            <div className={`p-4 rounded transition-all duration-500 ${
              step >= 2 ? 'bg-blue-100 scale-105' : 'bg-gray-100'
            }`}>
              Activation
            </div>
            <div className={`p-4 rounded transition-all duration-500 ${
              step >= 3 ? 'bg-blue-100 scale-105' : 'bg-gray-100'
            }`}>
              Fully Connected
            </div>
          </div>
        </div>
      ),
    },
    gan: {
      shortTitle: "GAN",
      title: "Generative Adversarial Networks (GANs)",
      icon: <Shuffle className="w-4 h-4" />, 
      description: (
        <div className="space-y-4">
          <p>
            Generative Adversarial Networks (GANs) consist of two neural networks competing against each other: a generator creating fake data and a discriminator trying to detect fakes. This adversarial process helps the generator improve until it produces data indistinguishable from real data.
          </p>
        </div>
      ),
      components: (
        <div className="space-y-4">
          <ul className="list-disc pl-6">
            <li><strong>Generator:</strong> Creates synthetic data that mimics real data</li>
            <li><strong>Discriminator:</strong> Evaluates the authenticity of the data</li>
            <li><strong>Adversarial Process:</strong> Generator and discriminator learn through competition</li>
            <li><strong>Latent Space Input:</strong> Random noise input for generating data</li>
          </ul>
        </div>
      ),
      applications: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Image Generation</li>
          <li>Style Transfer</li>
          <li>Data Augmentation</li>
          <li>Deepfake Creation</li>
          <li>3D Model Synthesis</li>
          <li>Creative Content Generation (e.g., music, art)</li>
        </ul>
      ),
      animation: () => (
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="w-1/3 p-4 bg-indigo-100 rounded text-center">
              Generator
            </div>
            <div className="w-8 h-8 bg-indigo-300 rounded-full flex items-center justify-center">
              ↔️
            </div>
            <div className="w-1/3 p-4 bg-indigo-200 rounded text-center">
              Discriminator
            </div>
          </div>
        </div>
      ),
    },

    // DIFFUSION
    diffusion: {
      shortTitle: "Diffusion",
      title: "Diffusion Models",
      icon: <Sparkles className="w-4 h-4" />,
      description: (
        <div className="space-y-4">
          <p>
            Diffusion models are a class of generative models that learn to gradually denoise data by reversing a fixed noising process. They have achieved remarkable success in generating high-quality images, audio, and other types of data.
          </p>
          <p>
            The key idea is to gradually add noise to training data and then learn to reverse this process, allowing the model to generate new data by starting from pure noise and gradually denoising it.
          </p>
        </div>
      ),
      components: (
        <div className="space-y-4">
          <ul className="list-disc pl-6">
            <li><strong>Forward Process:</strong> Gradually adds noise to data</li>
            <li><strong>Reverse Process:</strong> Learns to denoise data</li>
            <li><strong>U-Net Architecture:</strong> Common backbone for diffusion models</li>
            <li><strong>Noise Schedule:</strong> Controls the rate of noise addition/removal</li>
          </ul>
        </div>
      ),
      applications: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Image Generation (Stable Diffusion)</li>
          <li>Audio Generation</li>
          <li>Video Generation</li>
          <li>3D Model Generation</li>
          <li>Scientific Data Generation</li>
        </ul>
      ),
      animation: ({step, setStep}) => (
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setStep((prev) => (prev + 1) % 5)}
            >
              Next Step
            </button>
          </div>
          <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 transition-opacity duration-500 ${
                step >= 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="absolute top-4 left-4 text-white">Adding Noise (Step 1)</p>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 transition-opacity duration-500 ${
                step >= 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="absolute top-4 left-4 text-white">Adding More Noise (Step 2)</p>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 transition-opacity duration-500 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="absolute top-4 left-4 text-white">Fully Noised (Step 3)</p>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 transition-opacity duration-500 ${
                step >= 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="absolute top-4 left-4 text-white">Denoising (Step 4)</p>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-300 transition-opacity duration-500 ${
                step >= 4 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="absolute top-4 left-4 text-white">Recovered Image (Step 5)</p>
            </div>
          </div>
        </div>
      ),
    },
    
    // Reinforcement Learning from Human Feedback
    rlhf: {
      shortTitle: "RLHF",
      title: "Reinforcement Learning from Human Feedback (RLHF)",
      icon: <ThumbsUp className="w-4 h-4" />, 
      description: (
        <div className="space-y-4">
          <p>
            Reinforcement Learning from Human Feedback (RLHF) is a technique where AI models are fine-tuned using human preferences as rewards. It allows AI to align its behavior more closely with human expectations, improving safety and usability.
          </p>
          <p>
            RLHF combines reinforcement learning algorithms with human-in-the-loop feedback to train models in domains where objective rewards are difficult to define.
          </p>
        </div>
      ),
      components: (
        <div className="space-y-4">
          <ul className="list-disc pl-6">
            <li><strong>Model Training:</strong> Base model is trained with supervised or unsupervised learning</li>
            <li><strong>Human Feedback:</strong> Human evaluators rank model outputs based on quality</li>
            <li><strong>Reward Model:</strong> Learns to predict human preferences</li>
            <li><strong>Reinforcement Learning:</strong> Fine-tunes the model based on the reward signal</li>
          </ul>
        </div>
      ),
      applications: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Improving Chatbot Responsiveness</li>
          <li>Ethical AI Alignment</li>
          <li>Personalized Content Recommendations</li>
          <li>Safe Deployment of AI Models</li>
          <li>Automated Decision-Making Systems</li>
        </ul>
      ),
      animation: () => (
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full h-16 bg-orange-100 rounded flex items-center justify-center">
              Model Generation
            </div>
            <div className="w-4 h-8 bg-orange-300"></div>
            <div className="w-full h-16 bg-orange-200 rounded flex items-center justify-center">
              Human Feedback
            </div>
            <div className="w-4 h-8 bg-orange-300"></div>
            <div className="w-full h-16 bg-orange-300 rounded flex items-center justify-center">
              Model Update
            </div>
          </div>
        </div>
      )
    },

    // GENERATIVE AI
    genai: {
      shortTitle: "GenAI",
      title: "Generative AI",
      icon: <Cpu className="w-4 h-4" />, 
      description: (
        <div className="space-y-4">
          <p>
            Generative AI refers to systems capable of creating new content, such as text, images, audio, and more, by learning patterns from training data. These models leverage advanced techniques in deep learning to generate realistic and creative outputs.
          </p>
          <p>
            By understanding patterns in data, generative AI is being used in various domains, from content creation to scientific discovery, unlocking new possibilities in automation and creativity.
          </p>
        </div>
      ),
      components: (
        <div className="space-y-4">
          <ul className="list-disc pl-6">
            <li><strong>Model Training:</strong> Ingest large datasets to learn patterns</li>
            <li><strong>Latent Space Representation:</strong> Encode data into lower-dimensional forms</li>
            <li><strong>Decoders:</strong> Generate outputs (text, images, etc.) from latent space</li>
            <li><strong>Feedback Loops:</strong> Fine-tune outputs based on evaluations</li>
          </ul>
        </div>
      ),
      applications: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Text Generation (ChatGPT, GPT Models)</li>
          <li>Image Synthesis (DALL-E, Stable Diffusion)</li>
          <li>Music and Audio Composition</li>
          <li>Drug Discovery and Molecular Design</li>
          <li>Creative Content Production (Art, Storytelling)</li>
        </ul>
      ),
      animation: () => (
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-8 bg-pink-100 rounded"></div>
              <div className="h-8 bg-pink-200 rounded"></div>
              <div className="h-8 bg-pink-300 rounded"></div>
            </div>
            <div className="flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-pink-500" />
            </div>
          </div>
        </div>
      )
    },

    // ATTENTION MECHANISM
    attentionMechanism: {
      shortTitle: "Attention",
      title: "Attention Mechanisms",
      icon: <Target className="w-4 h-4" />,
      description: (
          <div className="space-y-4">
              <p>
                  Attention mechanisms allow neural networks to focus on different parts of the input when producing each part of the output. This mechanism has revolutionized sequence processing tasks by enabling direct modeling of relationships between all elements in a sequence.
              </p>
              <p>
                  The mechanism calculates importance weights for all input elements when producing each output element, allowing the model to focus on relevant information dynamically.
              </p>
          </div>
      ),
      components: (
          <div className="space-y-4">
              <ul className="list-disc pl-6">
                  <li><strong>Query:</strong>{` What we're looking for`}</li>
                  <li><strong>Key:</strong> What we match against</li>
                  <li><strong>Value:</strong> What we extract information from</li>
                  <li><strong>Attention Weights:</strong> Computed importance scores</li>
                  <li><strong>Context Vector:</strong> Weighted sum of values</li>
              </ul>
          </div>
      ),
      applications: (
          <ul className="list-disc pl-6 space-y-2">
              <li>Neural Machine Translation</li>
              <li>Document Summarization</li>
              <li>Image Captioning</li>
              <li>Speech Recognition</li>
              <li>Question Answering</li>
          </ul>
      ),
      animation: ({step, setStep}) => (
          <div className="p-4 bg-slate-100 rounded-lg">
              <div className="flex justify-center space-x-4 mb-4">
                  {['query', 'key', 'value'].map((component, index) => (
                      <button
                          key={component}
                          className={`px-4 py-2 rounded ${
                              step === index ? 'bg-yellow-500 text-white' : 'bg-gray-200'
                          }`}
                          onClick={() => setStep(index)}
                      >
                          {component.charAt(0).toUpperCase() + component.slice(1)}
                      </button>
                  ))}
              </div>
              <div className="h-40 flex items-center justify-center border-2 border-yellow-200 rounded">
                  <div className={`transition-all duration-500 ${
                      step === 0 ? 'scale-100' : 'scale-0'
                  }`}>
                      {`Query: What we're looking for`}
                  </div>
                  <div className={`transition-all duration-500 ${
                      step === 1 ? 'scale-100' : 'scale-0'
                  }`}>
                      Key: What we match against
                  </div>
                  <div className={`transition-all duration-500 ${
                      step === 2 ? 'scale-100' : 'scale-0'
                  }`}>
                      Value: Information we extract
                  </div>
              </div>
          </div>
      )
  },

  autoencoder: {
      shortTitle: "AE",
      title: "Autoencoders",
      icon: <Binary className="w-4 h-4" />,
      description: (
          <div className="space-y-4">
              <p>
                  Autoencoders are neural networks that learn to compress data into a lower-dimensional representation and then reconstruct it. They are useful for dimensionality reduction, feature learning, and generative modeling.
              </p>
              <p>
                  The network consists of an encoder that compresses the input into a latent space and a decoder that reconstructs the original input from this compressed representation.
              </p>
          </div>
      ),
      components: (
          <div className="space-y-4">
              <ul className="list-disc pl-6">
                  <li><strong>Encoder:</strong> Compresses input to latent representation</li>
                  <li><strong>Latent Space:</strong> Compressed representation of data</li>
                  <li><strong>Decoder:</strong> Reconstructs input from latent space</li>
                  <li><strong>Loss Function:</strong> Measures reconstruction quality</li>
              </ul>
          </div>
      ),
      applications: (
          <ul className="list-disc pl-6 space-y-2">
              <li>Dimensionality Reduction</li>
              <li>Feature Learning</li>
              <li>Anomaly Detection</li>
              <li>Image Compression</li>
              <li>Denoising</li>
          </ul>
      ),
      animation: ({step, setStep}) => (
          <div className="p-4 bg-slate-100 rounded-lg">
              <div className="flex items-center justify-between">
                  <div className={`w-1/4 h-32 bg-blue-100 rounded transition-all duration-500 ${
                      step >= 0 ? 'opacity-100' : 'opacity-0'
                  }`}>
                      Input
                  </div>
                  <div className={`w-1/4 h-16 bg-blue-300 rounded transition-all duration-500 ${
                      step >= 1 ? 'opacity-100' : 'opacity-0'
                  }`}>
                      Latent
                  </div>
                  <div className={`w-1/4 h-32 bg-blue-100 rounded transition-all duration-500 ${
                      step >= 2 ? 'opacity-100' : 'opacity-0'
                  }`}>
                      Output
                  </div>
              </div>
              <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => setStep((prev) => (prev + 1) % 3)}
              >
                  Next Step
              </button>
          </div>
      )
  },

  reinforcementLearning: {
      shortTitle: "RL",
      title: "Reinforcement Learning",
      icon: <Cog className="w-4 h-4" />,
      description: (
          <div className="space-y-4">
              <p>
                  Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent receives rewards or penalties based on its actions and learns to maximize cumulative rewards over time.
              </p>
              <p>
                  RL is unique because it learns through trial and error, similar to how humans learn from experience. The agent must balance exploring new actions with exploiting known good actions.
              </p>
          </div>
      ),
      components: (
          <div className="space-y-4">
              <ul className="list-disc pl-6">
                  <li><strong>Agent:</strong> The decision-maker</li>
                  <li><strong>Environment:</strong> The world the agent interacts with</li>
                  <li><strong>State:</strong> Current situation</li>
                  <li><strong>Action:</strong> What the agent can do</li>
                  <li><strong>Reward:</strong> Feedback signal</li>
                  <li><strong>Policy:</strong> Strategy for choosing actions</li>
              </ul>
          </div>
      ),
      applications: (
          <ul className="list-disc pl-6 space-y-2">
              <li>Game Playing (Chess, Go)</li>
              <li>Robotics Control</li>
              <li>Resource Management</li>
              <li>Autonomous Vehicles</li>
              <li>Trading Strategies</li>
          </ul>
      ),
      animation: ({step, setStep}) => (
          <div className="p-4 bg-slate-100 rounded-lg">
              <div className="flex justify-center space-x-4">
                {step}
                  <div className={`p-4 rounded transition-all duration-500 ${
                      step === 0 ? 'bg-green-300' : 'bg-gray-200'
                  }`}>
                      Agent
                  </div>
                  <div className={`p-4 rounded transition-all duration-500 ${
                      step === 1 ? 'bg-green-300' : 'bg-gray-200'
                  }`}>
                      Environment
                  </div>
              </div>
              <button
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                  onClick={() => setStep(step === 0 ? 1 : 0)}
              >
                  Next Step
              </button>
          </div>
      )
  },

  transformerVariants: {
      shortTitle: "Variants",
      title: "Transformer Variants",
      icon: <GitBranch className="w-4 h-4" />,
      description: (
          <div className="space-y-4">
              <p>
                  Different variants of the Transformer architecture have been developed to address specific challenges or improve efficiency. These include models like BERT (bidirectional encoding), GPT (left-to-right generation), T5 (text-to-text transfer), and more specialized architectures.
              </p>
          </div>
      ),
      components: (
          <div className="space-y-4">
              <ul className="list-disc pl-6">
                  <li><strong>BERT:</strong> Bidirectional encoding for understanding</li>
                  <li><strong>GPT:</strong> Unidirectional for text generation</li>
                  <li><strong>T5:</strong> Text-to-text framework</li>
                  <li><strong>BART:</strong> Denoising autoencoder</li>
                  <li><strong>ViT:</strong> Vision Transformer for images</li>
              </ul>
          </div>
      ),
      applications: (
          <ul className="list-disc pl-6 space-y-2">
              <li>Text Classification</li>
              <li>Named Entity Recognition</li>
              <li>Text Generation</li>
              <li>Image Recognition</li>
              <li>Multi-modal Tasks</li>
          </ul>
      ),
      animation: ({step, setStep}) => (
          <div className="p-4 bg-slate-100 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                  {['BERT', 'GPT', 'T5'].map((variant, index) => (
                      <div
                          key={variant}
                          className={`p-4 rounded transition-all duration-500 ${
                              step === index ? 'bg-purple-300' : 'bg-gray-200'
                          }`}
                          onClick={() => setStep(index)}
                      >
                          {variant}
                      </div>
                  ))}
              </div>
          </div>
      )
  },

  neuromorphic: {
      shortTitle: "Neuromorphic",
      title: "Neuromorphic Computing",
      icon: <Brain className="w-4 h-4" />,
      description: (
          <div className="space-y-4">
              <p>
                  Neuromorphic computing involves designing computer hardware and software systems that mimic the structure and function of biological neural networks. These systems aim to process information more efficiently than traditional von Neumann architectures.
              </p>
          </div>
      ),
      components: (
          <div className="space-y-4">
              <ul className="list-disc pl-6">
                  <li><strong>Spiking Neural Networks:</strong> Event-based processing</li>
                  <li><strong>Neural Hardware:</strong> Specialized circuits</li>
                  <li><strong>Synaptic Elements:</strong> Adaptive connections</li>
                  <li><strong>Learning Rules:</strong> Bio-inspired algorithms</li>
              </ul>
          </div>
      ),
      applications: (
          <ul className="list-disc pl-6 space-y-2">
              <li>Real-time Processing</li>
              <li>Energy-efficient AI</li>
              <li>Sensor Networks</li>
              <li>Robotics Control</li>
              <li>Brain-computer Interfaces</li>
          </ul>
      ),
      animation: ({step, setStep}) => (
          <div className="p-4 bg-slate-100 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded transition-all duration-500 ${
                      step === 0 ? 'bg-red-300' : 'bg-gray-200'
                  }`}>
                      Hardware
                  </div>
                  <div className={`p-4 rounded transition-all duration-500 ${
                      step === 1 ? 'bg-red-300' : 'bg-gray-200'
                  }`}>
                      Software
                  </div>
              </div>
              <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => setStep(step === 0 ? 0 : 1)}
              >
                  Toggle View
              </button>
          </div>
      )
  },
  };