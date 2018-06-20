from tensorflow.python.keras import backend


def huber_loss(target, prediction):
    """ sqrt(1 + error^2) - 1 """
    error = prediction - target
    sqrt = backend.sqrt(1 + backend.square(error))
    return backend.mean(sqrt - 1, axis=-1)
