<?php

namespace App\DataFixtures;

use App\Entity\Offer;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class OfferFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        foreach ($this->getOfferData() as [$price, $priceCurrency, $image ])
        {
            $offer = new Offer();
            $offer->setPrice($price);
            $offer->setPriceCurrency($priceCurrency);
            $offer->setUrl($image)
            ;
            $manager->persist($offer);
        }
        $manager->flush();
    }

    private function getOfferData(): array
    {
        return [
            [ '35', 'USD','https://i.picsum.photos/id/1024/1920/1280.jpg'],
            [ '9', 'EUR','https://i.picsum.photos/id/1024/1920/1023.jpg'],
            [ '5', 'EUR','https://i.picsum.photos/id/1024/1920/1025.jpg'],
            [ '60', 'EUR','https://i.picsum.photos/id/1024/1920/1011.jpg'],
            [ '10', 'EUR','https://i.picsum.photos/id/1024/1920/1010.jpg'],
            [ '15', 'EUR','https://i.picsum.photos/id/1024/1920/0.jpg'],

        ];
    }
}
