<?php

namespace Drupal\content_sync\Exporter;


use Drupal\Core\Entity\ContentEntityInterface;

interface ContentExporterInterface {

  /**
   * Exports the given entity.
   *
   * @param \Drupal\Core\Entity\ContentEntityInterface $entity
   *   The entity to export.
   * @param array $context
   *   The context to be passed to the serializer.
   *
   * @return string
   *   The serialized entity.
   */
  public function exportEntity(ContentEntityInterface $entity, array $context = []);
}