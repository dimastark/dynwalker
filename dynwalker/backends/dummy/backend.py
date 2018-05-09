from ..base.backend import BaseBackend


class DummyBackend(BaseBackend):
    @property
    def species_count(self):
        return 2
