import abc


class BaseBackend(abc.ABC):
    @property
    @abc.abstractmethod
    def species_count(self):
        pass
